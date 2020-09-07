import { Injectable } from '@nestjs/common';
import { ARTICLE_MODEL_NAME } from '../constants';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createArticleDto } from './dto/createArticle.dto';
import { getArticlesDto } from './dto/getArticles.dto';
import { IArticle } from './interface/article.interface';
import { getRandomArticlesDto } from './dto/getRandomArticles.dto';

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

  async getRandomArticles(query: getRandomArticlesDto): Promise<IArticle[]> {
    return await this.articleModel
      .aggregate()
      .sample(query.limit)
      .project('articleTitle articleDescription _id');
  }

  async getOneArticle(articleId: string): Promise<IArticle> {
    console.log(articleId);
    return this.articleModel.findById(articleId);
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

  async doesArticleExist(articleId: string): Promise<boolean> {
    return await this.articleModel.exists({ _id: Types.ObjectId(articleId) });
  }

  async isAllowedToEdit(articleId: string, author: string): Promise<boolean> {
    const article = await this.getOneArticle(articleId);
    return article.articleAuthor == author;
  }
}
