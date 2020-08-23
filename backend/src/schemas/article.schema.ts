import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Article extends mongoose.Document {
  @Prop(raw({
    articleTitle: { type: String, require: true, unique: true },
    articleDescription: {type: String, require: true},
    articleContent: {type: String, require: true},
    articleAuthor: {type: mongoose.Schema.Types.ObjectId, require: true, ref: "Author"},
    createDate: { type: Date, require: true,  default: Date.now},
    updateDate: {type: Date, default: null},
    isDraft: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false}
  }))
  details: Record<string, any>;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);