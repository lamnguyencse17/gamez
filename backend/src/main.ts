import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as helmet from "helmet"
import * as csurf from "csurf"
import * as cookieParser from "cookie-parser"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.use(csurf({cookie: true}));
  app.useGlobalPipes(new ValidationPipe())
  app.use(helmet())
  app.enableCors()

  await app.listen(3000);
}
bootstrap();
