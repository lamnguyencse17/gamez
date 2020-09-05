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
import { Response } from 'express';
import { TagService } from './tag.service';
import { getTagsDto } from './dto/getTags.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { createTagDto } from './dto/createTag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
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
