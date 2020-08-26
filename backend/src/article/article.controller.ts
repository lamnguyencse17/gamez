import { Body, Controller, Get, Post, Query, Req, Res } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { createArticleDto } from "./dto/createArticle.dto";
import { getArticlesDto } from "./dto/getArticles.dto";
import { Response } from "express";

@Controller("article")
export class ArticleController {
  constructor(private readonly  articleService: ArticleService) {
  }

  @Get("/")
  async getArticles(@Query() query: getArticlesDto, @Req() req, @Res() res: Response): Promise<Response> {
    const articleResults = await this.articleService.getArticles(query);
    return res.status(200).json({ articles: articleResults, _csrf: req.csrfToken() });
  }

  @Post()
  createArticle(@Body() createArticleDto: createArticleDto, @Req() req, @Res() res: Response): Response {
    return res.status(200).json({ ...this.articleService.createArticle(createArticleDto), _csrf: req.csrfToken() });
  }
}