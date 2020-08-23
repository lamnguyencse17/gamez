import { Injectable } from "@nestjs/common";
import {ARTICLES_PER_PAGE } from "../constants";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Article } from "../schemas/article.schema";
import { getArticleDto } from "./dto/getArticle.dto";

@Injectable()
export class ArticleService{
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>) {}

  async getArticleByPage(getByPage: getArticleDto): Promise<Article[]> {
    return this.articleModel.find({}).skip((getByPage.page - 1) * ARTICLES_PER_PAGE).limit(ARTICLES_PER_PAGE);
  }
}