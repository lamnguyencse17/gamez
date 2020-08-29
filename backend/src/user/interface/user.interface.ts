import { Document } from 'mongoose';
import { IArticle } from '../../article/interface/article.interface';

export interface IUser extends Document {
  name: string;
  readonly email: string;
  password: string;
  readonly articles: IArticle[];
  isVerified?: boolean;
}
