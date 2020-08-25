import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
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
    }).json({ token, _csrf: req.csrfToken() });
  }

  @Post("/signup")
  async signup(@Req() req, @Res() res: Response): Promise<Response> {
    const createUserDetails = req.body;
    const createdUser = await this.userService.createUser(createUserDetails)
    return res.status(201).json({...createdUser, _csrf: req.csrfToken()})
  }
}
