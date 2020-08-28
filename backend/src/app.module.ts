import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { getCookieMiddleware } from './middlewares/cookieGetter.middleware';
import { ConfigModule } from '@nestjs/config';
import * as csurf from 'csurf';
import { RedisModule } from 'nestjs-redis';
import { REDIS_NAME } from './constants';

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }),
    AuthModule,
    UserModule,
    RedisModule.register({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      password: process.env.REDIS_SECRET,
      name: REDIS_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(getCookieMiddleware).forRoutes('*');
    consumer
      .apply(csurf({ cookie: { key: '_csrf', sameSite: true } }))
      .exclude('auth/(.*)')
      .forRoutes('*');
  }
}
