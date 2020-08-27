import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { Response } from "express";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(new JwtAuthGuard())
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getProfile(@Req() req, @Res() res: Response): Promise<Response> {
    const user = req.user;
    const userInfo = await this.userService.getUserById(user._id);
    return res.status(200).json({ user: { ...userInfo }, _csrf: req.csrfToken() });
  }
}
