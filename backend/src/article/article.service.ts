import { Injectable } from "@nestjs/common";
import {ARTICLES_PER_PAGE } from "../constants";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { createArticleDto } from "./dto/createArticle.dto";
import { IArticle } from "../schemas/article/article.interface";

@Injectable()
export class ArticleService{
  constructor(@InjectModel("article") private readonly articleModel: Model<IArticle>) {}

  async getArticleByPage(page: number): Promise<IArticle[]> {
    console.log(page)
    return this.articleModel.find({}).skip((page - 1) * ARTICLES_PER_PAGE).limit(ARTICLES_PER_PAGE);
  }

  async createArticle(createArticleDto: createArticleDto): Promise<IArticle> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }
}