import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '../constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { Redis } from '../redis/redis';
import { EmailService } from '../email/email.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  exports: [AuthService, PassportModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, Redis, EmailService],
  controllers: [AuthController],
})
export class AuthModule {}
