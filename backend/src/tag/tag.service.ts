import { Injectable } from '@nestjs/common';
import { TAG_MODEL_NAME } from '../constants';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ITag } from './interface/tag.interface';
import { getTagsDto } from './dto/getTags.dto';
import { createTagDto } from './dto/createTag.dto';

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
  async createTag(newTag: createTagDto, author: string): Promise<ITag> {
    const createdTag = new this.tagModel({
      ...newTag,
      createdBy: Types.ObjectId(author),
    });
    return createdTag.save();
  }
}
