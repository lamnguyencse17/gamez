import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { validateUserDto } from './dto/validateUser.dto';
import { passwordCompareDto } from './dto/passwordCompare.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from '../constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userDetails: validateUserDto): Promise<any> {
    const { email, password } = userDetails;
    const user = await this.userService.getUserByEmail(email);
    const isPasswordMatch = await this.passwordCompare({
      password,
      hash: user.password,
    });
    if (user && isPasswordMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<string> {
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
