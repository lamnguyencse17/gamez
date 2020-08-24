import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorModule } from './author/author.module';

@Module({
  imports: [ ArticleModule, MongooseModule.forRoot("mongodb+srv://zodiac3011:zodiac3011@cluster0.5m9ay.gcp.mongodb.net/gamez?retryWrites=true&w=majority"), AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
