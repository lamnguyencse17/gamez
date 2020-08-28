import * as mongoose from 'mongoose';
import { ARTICLE_MODEL_NAME } from '../../constants';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: ARTICLE_MODEL_NAME }],
  isVerified: { type: Boolean, default: false },
});
