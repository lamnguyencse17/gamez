import {Controller, Get, Param} from "@nestjs/common";
import {ArticleService} from "./article.service";
import { Article } from "../schemas/article.schema";

@Controller('article')
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {}
  @Get('/:page')
  getArticleByPage(@Param('page') page): Promise<Article[]>{
    return this.articleService.getArticleByPage(page);
  }
}