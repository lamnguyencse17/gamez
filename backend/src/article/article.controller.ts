import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { createArticleDto } from './dto/createArticle.dto';
import { getArticlesDto } from './dto/getArticles.dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { getArticleIdsDto } from './dto/getArticleIds.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/')
  async getArticles(
    @Query() query: getArticlesDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const articleResults = await this.articleService.getArticles(query);
    return res
      .status(200)
      .json({ articles: articleResults, _csrf: req.csrfToken() });
  }

  @Get('/id/')
  @HttpCode(HttpStatus.OK)
  async getArticleIds(
    @Query() query: getArticleIdsDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const articleIdsResult = await this.articleService.getArticleIds(
      query.limit,
    );
    return res.json(articleIdsResult);
  }

  @UseGuards(new JwtAuthGuard())
  @Post()
  async createArticle(
    @Body() article: createArticleDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const author = req.user._id;
    const newArticle = await this.articleService.createArticle(article, author);
    return res.status(200).json({
      newArticle,
      _csrf: req.csrfToken(),
    });
  }
}
