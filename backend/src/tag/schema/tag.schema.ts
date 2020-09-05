import * as mongoose from 'mongoose';
import { ARTICLE_MODEL_NAME, USER_MODEL_NAME } from '../../constants';

export const TagSchema = new mongoose.Schema({
  tagName: { type: String, required: true, unique: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: ARTICLE_MODEL_NAME }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: USER_MODEL_NAME },
  createAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});
