import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {ArticleService} from "./article.service";
import { createArticleDto } from "./dto/createArticle.dto";
import { IArticle } from "../schemas/article/article.interface";

@Controller('article')
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {}

  @Get('/:page')
  getArticleByPage(@Param("page") page: number): Promise<IArticle[]>{
    return this.articleService.getArticleByPage(page);
  }

  @Post()
  createArticle(@Body() createArticleDto: createArticleDto): Promise<IArticle>{
    return this.articleService.createArticle(createArticleDto);
  }
}