import {Module} from "@nestjs/common";
import {ArticleController} from "./article.controller";
import {ArticleService} from "./article.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchema } from "../schemas/article/article.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: "article", schema: ArticleSchema}])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}