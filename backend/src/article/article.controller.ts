import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {ArticleService} from "./article.service";
import { Article } from "../schemas/article.schema";
import { createArticleDto } from "./dto/createArticle.dto";

@Controller('article')
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {}

  @Get('/:page')
  getArticleByPage(@Param('page') page): Promise<Article[]>{
    return this.articleService.getArticleByPage(page);
  }

  @Post()
  createArticle(@Body() createArticleDto: createArticleDto): Promise<Article>{
    return this.articleService.createArticle(createArticleDto);
  }
}