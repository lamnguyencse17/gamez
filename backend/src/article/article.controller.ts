import { Body, Controller, Get, Query, ParseIntPipe, Post } from "@nestjs/common";
import {ArticleService} from "./article.service";
import { createArticleDto } from "./dto/createArticle.dto";
import { IArticle } from "./interface/article.interface";

@Controller('article')
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {}

  @Get('/')
  getArticleByPage(@Query("limit", ParseIntPipe) limit: number, @Query("offset", ParseIntPipe) offset: number): Promise<IArticle[]>{
    return this.articleService.getArticleByPage(limit, offset);
  }

  @Post()
  createArticle(@Body() createArticleDto: createArticleDto): Promise<IArticle>{
    return this.articleService.createArticle(createArticleDto);
  }
}