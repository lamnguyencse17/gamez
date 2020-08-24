import { Injectable } from "@nestjs/common";
import { IUser } from "./interface/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { USER_MODEL_NAME } from "../constants";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(USER_MODEL_NAME) private readonly userModel: Model<IUser>) {
  }

  async getUserByEmail(email: string): Promise<IUser | undefined> {
    return this.userModel.findOne({ email }).select("-__v").lean();
  }
}
