import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ARTICLE_MODEL_NAME, TAG_MODEL_NAME } from '../constants';
import { TagSchema } from './schema/tag.schema';
import { TagService } from './tag.service';
import { ArticleService } from '../article/article.service';
import { ArticleSchema } from '../article/schema/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TAG_MODEL_NAME, schema: TagSchema },
      { name: ARTICLE_MODEL_NAME, schema: ArticleSchema },
    ]),
  ],
  controllers: [TagController],
  providers: [TagService, ArticleService],
})
export class TagModule {}
