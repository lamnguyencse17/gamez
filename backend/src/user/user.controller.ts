import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(new JwtAuthGuard())
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getProfile(@Req() req: Request): any {
    return req.user;
  }
}
