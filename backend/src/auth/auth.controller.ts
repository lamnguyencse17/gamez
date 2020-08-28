import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  Body,
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { Redis } from '../redis/redis';
import { nanoid } from 'nanoid';
import { NANOID_LENGTH } from '../constants';
import { EmailService } from '../email/email.service';
import { signUpDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private redisService: Redis,
    private emailService: EmailService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req, @Res() res: Response): Promise<Response> {
    const token = await this.authService.login(req.user);
    const user = await this.userService.getUserById(req.user._id);
    if (!user.isVerified) {
      return res.status(400).json({
        message: 'Please verify your email before using our services',
      });
    }
    return res
      .status(200)
      .cookie('token', token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({ token, user });
  }

  @Post('/signup')
  async signup(
    @Res() res: Response,
    @Body() body: signUpDto,
  ): Promise<Response> {
    const createdUser = await this.userService.createUser(body);
    if (!createdUser.status) {
      return res.status(400).json({ message: createdUser.message });
    }
    const { _id, name, email } = createdUser;
    const verifyToken = await this.authService.createVerifyToken(_id);
    const hash = nanoid(NANOID_LENGTH);
    await this.redisService.storeToken({ token: verifyToken, hash });
    await this.emailService.sendSignUpVerification({ name, email, hash });
    return res.status(201).json({ message: createdUser.message });
  }

  @Get('/logout')
  async logout(@Res() res: Response): Promise<Response> {
    return res
      .status(200)
      .cookie('token', '')
      .json({ message: 'Successfully logout' });
  }

  @Get('/verify/:verifyHash')
  async verify(@Req() req, @Res() res: Response): Promise<Response> {
    const verifyHash = req.params.verifyHash;
    const token = await this.redisService.findToken(verifyHash);
    const userData = await this.authService.verifyJwt({ token });
    const markVerifiedResult = await this.userService.markVerified(
      userData._id,
    );
    if (!markVerifiedResult.status) {
      return res.status(400).json({ message: markVerifiedResult.message });
    }
    return res.status(200).json({ message: markVerifiedResult.message });
  }
}
