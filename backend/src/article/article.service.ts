import { Injectable } from "@nestjs/common";
import {ARTICLES_PER_PAGE } from "../constants";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Article } from "../schemas/article.schema";
import { createArticleDto } from "./dto/createArticle.dto";

@Injectable()
export class ArticleService{
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>) {}

  async getArticleByPage(page: number): Promise<Article[]> {
    console.log(page)
    return this.articleModel.find({}).skip((page - 1) * ARTICLES_PER_PAGE).limit(ARTICLES_PER_PAGE);
  }

  async createArticle(createArticleDto: createArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }
}