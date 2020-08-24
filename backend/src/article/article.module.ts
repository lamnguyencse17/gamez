import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchema } from "./schema/article.schema";
import { ARTICLE_MODEL_NAME } from "../constants";

@Module({
  imports: [MongooseModule.forFeature([{ name: ARTICLE_MODEL_NAME, schema: ArticleSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {
}