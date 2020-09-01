import {
  Controller,
  Get,
  Post,
  Res,
  Param,
  UseGuards,
  Body,
  Request,
  HttpException,
  HttpStatus,
  HttpCode,
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
import { verifyDto } from '../article/dto/verify.dto';

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
  @HttpCode(HttpStatus.OK)
  async login(@Request() req, @Res() res: Response): Promise<Response> {
    const token = await this.authService.login(req.user);
    const user = await this.userService.getUserById(req.user._id);
    if (!user.isVerified) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Please verify your email before using our services',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    delete user.isVerified;
    return res
      .cookie('token', token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({ token, user });
  }

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(
    @Res() res: Response,
    @Body() body: signUpDto,
  ): Promise<Response> {
    const createdUser = await this.userService.createUser(body);
    if (!createdUser.status) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: createdUser.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const { _id, name, email } = createdUser;
    const verifyToken = await this.authService.createVerifyToken(_id);
    const hash = nanoid(NANOID_LENGTH);
    await this.redisService.storeToken({ token: verifyToken, hash });
    await this.emailService.sendSignUpVerification({ name, email, hash });
    return res.json({ message: createdUser.message });
  }

  @Get('/logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res() res: Response): Promise<Response> {
    return res.cookie('token', '').json({ message: 'Successfully logout' });
  }

  @Get('/verify/:verifyHash')
  @HttpCode(HttpStatus.OK)
  async verify(
    @Request() req,
    @Res() res: Response,
    @Param('verifyHash') hash: string,
  ): Promise<Response> {
    const token = await this.redisService.findToken(hash);
    const userData = await this.authService.verifyJwt({ token });
    const markVerifiedResult = await this.userService.markVerified(
      userData._id,
    );
    if (!markVerifiedResult.status) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: markVerifiedResult.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return res.json({ message: markVerifiedResult.message });
  }
}
