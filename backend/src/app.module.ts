import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleModule } from "./article/article.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { getCookieMiddleware } from "./middlewares/cookieGetter.middleware";
import * as csurf from "csurf";

@Module({
  imports: [ArticleModule,
    MongooseModule.forRoot("mongodb+srv://zodiac3011:zodiac3011@cluster0.5m9ay.gcp.mongodb.net/gamez?retryWrites=true&w=majority"),
    AuthModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(getCookieMiddleware).forRoutes("*");
    consumer.apply(csurf({ cookie: { key: "_csrf", sameSite: true } })).exclude("auth/(.*)").forRoutes("*")
  }
}
