import { Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { LocalAuthGuard } from "./guard/local-auth.guard";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Req() req, @Res() res: Response): Promise<Response> {
    const token = await this.authService.login(req.user);
    return res.status(200).cookie("token", token, {
      maxAge: 3600000,
      httpOnly: true
    }).json({ token });
  }

  @Post("/signup")
  async signup(@Req() req, @Res() res: Response): Promise<Response> {
    const createUserDetails = req.body;
    const createdUser = await this.userService.createUser(createUserDetails);
    if (!createdUser.status) {
      return res.status(400).json({ message: createdUser.message });
    }
    return res.status(201).json({ message: createdUser.message });
  }

  @Get("/logout")
  async logout(@Res() res: Response): Promise<Response> {
    return res.status(200).cookie("token", "").json({ message: "Successfully logout" });
  }
}
