import {
  Controller,
  Get,
  Request,
  Res,
  UseGuards,
  Patch,
  HttpException,
  HttpStatus,
  HttpCode,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Response } from 'express';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { updateProfileDto } from './dto/updateProfile.dto';

@Controller('user')
@UseGuards(new JwtAuthGuard())
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getProfile(@Request() req, @Res() res: Response): Promise<Response> {
    const user = req.user;
    const userInfo = await this.userService.getUserById(user._id);
    delete userInfo.isVerified;
    return res.json({ user: { ...userInfo }, _csrf: req.csrfToken() });
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Patch()
  async updateProfile(
    @Body()
    body: updateProfileDto,
    @Request() req,
    @Res() res: Response,
  ): Promise<Response> {
    const user = req.user;
    const { newPassword, name, password } = body;
    const isAllowedToUpdate = await this.authService.validateUser({
      email: user.email,
      password,
    });
    if (!isAllowedToUpdate.status) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: isAllowedToUpdate.message },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (newPassword == password) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: "New password and old password can't be the same",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const newUser = await this.userService.updateUser({
      _id: user._id,
      name,
      password: newPassword,
    });
    return res.json({ newUser });
  }
}
