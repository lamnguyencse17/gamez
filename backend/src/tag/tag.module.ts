import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TAG_MODEL_NAME } from '../constants';
import { TagSchema } from './schema/tag.schema';
import { TagService } from './tag.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TAG_MODEL_NAME, schema: TagSchema }]),
  ],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
