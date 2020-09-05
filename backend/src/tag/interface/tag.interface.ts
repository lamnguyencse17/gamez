import { Document } from 'mongoose';

export interface ITag extends Document {
  readonly tagName: string;
  readonly articles: string[];
  readonly isDeleted: boolean;
}
