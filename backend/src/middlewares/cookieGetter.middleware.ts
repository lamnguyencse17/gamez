import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class getCookieMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    req.body.token =
      req.cookies && req.cookies.token ? req.cookies.token : null;
    next();
  }
}
