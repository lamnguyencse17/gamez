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
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { TagService } from './tag.service';
import { getTagsDto } from './dto/getTags.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { createTagDto } from './dto/createTag.dto';
import { getArticlesInTagDto } from './dto/getArticlesInTag.dto';
import { addArticleToTagDto } from './dto/addArticleToTag.dto';
import { ArticleService } from '../article/article.service';
import { getTagNamesDto } from './dto/getTagNames.dto';

@Controller('tag')
export class TagController {
  constructor(
    private readonly tagService: TagService,
    private readonly articleService: ArticleService,
  ) {}
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getTags(
    @Query() query: getTagsDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const tagResults = await this.tagService.getTags(query);
    return res.json({ tags: tagResults, _csrf: req.csrfToken() });
  }

  @Get('/name/')
  @HttpCode(HttpStatus.OK)
  async getArticleIds(
    @Query() query: getTagNamesDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const tagIdsResult = await this.tagService.getTagNames(query.limit);
    return res.json(tagIdsResult);
  }

  @Get('/:tagName')
  @HttpCode(HttpStatus.OK)
  async getArticleInTags(
    @Param('tagName') tagName: string,
    @Query() query: getArticlesInTagDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const tagResult = await this.tagService.getArticlesInTag({
      tagName,
      query,
    });
    return res.json({ tag: tagResult, _csrf: req.csrfToken() });
  }

  @UseGuards(new JwtAuthGuard())
  @Post('/:tagName')
  @HttpCode(HttpStatus.CREATED)
  async addArticleToTag(
    @Param('tagName') tagName: string,
    @Body() articleObject: addArticleToTagDto,
    @Req() req,
    @Res() res: Response,
  ): Promise<Response> {
    const { articleId } = articleObject;
    const doesArticleExist = await this.articleService.doesArticleExist(
      articleId,
    );
    if (!doesArticleExist) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: 'Article does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isAllowedToEdit = await this.articleService.isAllowedToEdit(
      articleId,
      req.user._id,
    );
    if (!isAllowedToEdit) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Not allowed to edit this article tag',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const addResults = await this.tagService.addArticleToTag(
      tagName,
      articleId,
    );
    if (!addResults.status) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: addResults.message },
        HttpStatus.BAD_REQUEST,
      );
    }
    return res.json({ message: `Added to tag "${tagName}" successfully ` });
  }

  @UseGuards(new JwtAuthGuard())
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTag(@Body() tag: createTagDto, @Req() req, @Res() res: Response) {
    const author = req.user._id;
    const newTag = await this.tagService.createTag(tag, author);
    return res.json({
      newTag,
      _csrf: req.csrfToken(),
    });
  }
}
