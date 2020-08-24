import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly articleTitle: string;
  readonly articleDescription: string;
  readonly articleContent: string;
  readonly articleAuthor: string;
  readonly createDate: string;
  readonly updateDate: string|null;
  readonly isDraft: boolean;
  readonly isDeleted: boolean;
}