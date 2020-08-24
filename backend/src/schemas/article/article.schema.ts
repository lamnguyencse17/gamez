import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  articleTitle: {type: String, required: true, unique: true},
  articleDescription: {type: String, required: true},
  articleContent: {type: String, d: true},
  articleAuthor: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Author"},
  createDate:{type: Date, required: true,  default: Date.now},
  updateDate:{type: Date, default: null},
  isDraft:{type: Boolean, default: false},
  isDeleted: {type: Boolean, default: false}
});