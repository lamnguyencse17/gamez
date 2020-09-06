import { Injectable } from '@nestjs/common';
import { TAG_MODEL_NAME } from '../constants';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ITag } from './interface/tag.interface';
import { getTagsDto } from './dto/getTags.dto';
import { createTagDto } from './dto/createTag.dto';
import { getArticlesInTagDto } from './dto/getArticlesInTag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(TAG_MODEL_NAME)
    private readonly tagModel: Model<ITag>,
  ) {}
  async getTags(query: getTagsDto): Promise<ITag[]> {
    return this.tagModel
      .find({})
      .sort({ createDate: -1 })
      .skip(query.offset)
      .limit(query.limit);
  }

  async getArticlesInTag({
    tagName,
    query,
  }: {
    tagName: string;
    query: getArticlesInTagDto;
  }): Promise<ITag> {
    return this.tagModel
      .findOne({ tagName })
      .populate({
        path: 'articles',
        select: '_id articleTitle articleDescription',
        options: {
          sort: { createDate: -1 },
          lean: true,
          skip: query.offset,
          limit: query.limit,
        },
      })
      .lean();
  }

  async addArticleToTag(
    tagName: string,
    articleId: string,
  ): Promise<{ status: boolean; message?: string }> {
    const isAdded = await this.tagModel.findOneAndUpdate(
      { tagName, articles: { $ne: articleId } },
      {
        $addToSet: { articles: articleId },
      },
    );
    if (!isAdded) {
      return {
        status: false,
        message: 'Tag name is not found or Article is already in tag',
      };
    }
    return { status: true };
  }
  async createTag(newTag: createTagDto, author: string): Promise<ITag> {
    const createdTag = new this.tagModel({
      ...newTag,
      createdBy: Types.ObjectId(author),
    });
    return createdTag.save();
  }
}
