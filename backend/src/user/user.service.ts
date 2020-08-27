import { Injectable } from '@nestjs/common';
import { IUser } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL_NAME } from '../constants';
import { Model } from 'mongoose';
import { createUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_MODEL_NAME) private readonly userModel: Model<IUser>,
  ) {}

  private static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, await UserService.genSalt());
  }

  private static async genSalt(): Promise<string> {
    return await bcrypt.genSalt(12);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return this.userModel.findOne({ email }).select('-__v').lean();
  }

  async getUserById(_id: string): Promise<IUser | null> {
    return this.userModel.findById(_id).select('-__v').lean();
  }

  async createUser(
    createUserDetails: createUserDto,
  ): Promise<{ status: boolean; message: string }> {
    createUserDetails.password = await UserService.hashPassword(
      createUserDetails.password,
    );
    return await this.userModel
      .create({ ...createUserDetails })
      .then(() => {
        return { status: true, message: 'Successfully signed up' };
      })
      .catch(() => {
        return { status: false, message: 'Email already existed' };
      });
  }
}
