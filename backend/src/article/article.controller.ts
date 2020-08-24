import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { createArticleDto } from "./dto/createArticle.dto";
import { IArticle } from "./interface/article.interface";
import { getArticlesDto } from "./dto/getArticles.dto";

@Controller("article")
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {
  }

  @Get("/")
  getArticles(@Query() query: getArticlesDto): Promise<IArticle[]> {
    return this.articleService.getArticles(query);
  }

  @Post()
  createArticle(@Body() createArticleDto: createArticleDto): Promise<IArticle> {
    return this.articleService.createArticle(createArticleDto);
  }
}