import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(email: string, password: string): Promise<any> {
    const validateResult = await this.authService.validateUser({
      email,
      password,
    });
    if (!validateResult.status) {
      throw new UnauthorizedException({
        message: validateResult.message,
      });
    }
    return validateResult.user;
  }
}
