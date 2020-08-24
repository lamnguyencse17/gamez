import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as helmet from "helmet"
import * as csurf from "csurf"
import * as cookieParser from "cookie-parser"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.use(csurf({cookie: true}));
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  app.use(helmet())
  app.enableCors()
  const options = new DocumentBuilder()
    .setTitle('Gamez API Documentation')
    .setDescription('Gamez API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
