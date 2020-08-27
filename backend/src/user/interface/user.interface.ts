import { Document } from 'mongoose';
import { IArticle } from '../../article/interface/article.interface';

export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly articles: Array<IArticle>;
}
