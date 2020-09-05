import { Document } from 'mongoose';

export interface ITag extends Document {
  readonly tagName: string;
  readonly articles: string[];
  readonly createdBy: string;
  readonly createdAt: string;
  readonly isDeleted: boolean;
}
