import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Article extends mongoose.Document {
  @Prop({type: String, require: true, unique: true})
  articleTitle
  @Prop({type: String, require: true})
  articleDescription
  @Prop({type: String, require: true})
  articleContent
  @Prop({type: mongoose.Schema.Types.ObjectId, require: true, ref: "Author"})
  articleAuthor
  @Prop({type: Date, require: true,  default: Date.now})
  createDate
  @Prop({type: Date, default: null})
  updateDate
  @Prop({type: Boolean, default: false})
  isDraft
  @Prop({type: Boolean, default: false})
  isDeleted
}

export const ArticleSchema = SchemaFactory.createForClass(Article);