import { Injectable } from '@nestjs/common';
import { ARTICLE_MODEL_NAME } from '../constants';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createArticleDto } from './dto/createArticle.dto';
import { getArticlesDto } from './dto/getArticles.dto';
import { IArticle } from './interface/article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(ARTICLE_MODEL_NAME)
    private readonly articleModel: Model<IArticle>,
  ) {}

  async getArticles(query: getArticlesDto): Promise<IArticle[]> {
    return this.articleModel
      .find({})
      .sort({ createDate: -1 })
      .skip(query.offset)
      .limit(query.limit);
  }

  async getArticleIds(limit: number): Promise<string[]> {
    return this.articleModel.find({}).limit(limit).distinct('_id');
  }

  async createArticle(
    newArticle: createArticleDto,
    author: string,
  ): Promise<IArticle> {
    const createdArticle = new this.articleModel({
      ...newArticle,
      articleAuthor: Types.ObjectId(author),
    });
    return createdArticle.save();
  }
}
