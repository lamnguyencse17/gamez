import * as mongoose from 'mongoose';

export const TagSchema = new mongoose.Schema({
  tagName: { type: String, required: true, unique: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId }],
  isDeleted: { type: Boolean, default: false },
});
