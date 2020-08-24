import { Injectable } from "@nestjs/common";
import { ARTICLE_MODEL_NAME} from "../constants";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { createArticleDto } from "./dto/createArticle.dto";
import {getArticlesDto} from "./dto/getArticles.dto"
import { IArticle } from "./interface/article.interface";

@Injectable()
export class ArticleService{
  constructor(@InjectModel(ARTICLE_MODEL_NAME) private readonly articleModel: Model<IArticle>) {}

  async getArticles(query: getArticlesDto): Promise<IArticle[]> {
    return this.articleModel.find({}).skip(query.offset).limit(query.limit);
  }

  async createArticle(createArticleDto: createArticleDto): Promise<IArticle> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }
}