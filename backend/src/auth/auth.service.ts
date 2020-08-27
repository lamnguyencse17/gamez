import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { validateUserDto } from './dto/validateUser.dto';
import { passwordCompareDto } from './dto/passwordCompare.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from '../constants';
import { IUser } from '../user/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    userDetails: validateUserDto,
  ): Promise<{ status: boolean; user?: IUser; message?: string }> {
    const { email, password } = userDetails;
    let user = await this.userService.getUserByEmail(email);
    if (!user) {
      return { status: false, message: 'Email does not exist' };
    }
    user = user.toObject();
    const isPasswordMatch = await this.passwordCompare({
      password,
      hash: user.password,
    });
    delete user.password;
    if (!isPasswordMatch) {
      return { status: false, message: 'Password does not match' };
    }
    return { status: true, user };
  }

  async login(user: IUser): Promise<string> {
    const payload = { _id: user._id, email: user.email };
    return this.jwtService.sign(payload, {
      secret: JWT_SECRET,
    });
  }

  async passwordCompare(passwordPair: passwordCompareDto): Promise<boolean> {
    const { password, hash } = passwordPair;
    return await bcrypt.compare(password, hash);
  }
}
