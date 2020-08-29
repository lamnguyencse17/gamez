import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JWT_SECRET, USER_MODEL_NAME } from '../constants';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: USER_MODEL_NAME,
        schema: UserSchema,
      },
    ]),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [UserService, AuthService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
