import { Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { LocalAuthGuard } from "./local-auth.guard";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const token = await this.authService.login(req.user);
    return res.status(200).cookie("token", token, {
      maxAge: 3600000,
      httpOnly: true
    }).json({ token });
  }
}
