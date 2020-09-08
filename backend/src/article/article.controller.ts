import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
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
import { getRandomArticlesDto } from './dto/getRandomArticles.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getArticles(
    @Query() query: getArticlesDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const articleResults = await this.articleService.getArticles(query);
    return res.json({ articles: articleResults, _csrf: req.csrfToken() });
  }

  @Get('/random')
  @HttpCode(HttpStatus.OK)
  async getRandomArticles(
    @Query() query: getRandomArticlesDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const articleResults = await this.articleService.getRandomArticles(query);
    return res.json({ articles: articleResults, _csrf: req.csrfToken() });
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

  @Get('/:articleId')
  @HttpCode(HttpStatus.OK)
  async getOneArticle(
    @Param('articleId') articleId: string,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const articleResult = await this.articleService.getOneArticle(articleId);
    return res.json({
      article: { ...articleResult.toObject() },
      _csrf: req.csrfToken(),
    });
  }

  @UseGuards(new JwtAuthGuard())
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createArticle(
    @Body() article: createArticleDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    console.log(article);
    const author = req.user._id;
    const newArticle = await this.articleService.createArticle(article, author);
    return res.json({
      newArticle,
      _csrf: req.csrfToken(),
    });
  }
}
