import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { USER_MODEL_NAME } from "../constants";
import { UserSchema } from "./schema/user.schema";
import { UserController } from "./user.controller";


@Module({
  imports: [MongooseModule.forFeature([{
    name: USER_MODEL_NAME,
    schema: UserSchema
  }])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController]
})
export class UserModule {
}
