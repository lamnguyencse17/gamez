import { IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class addArticleToTagDto {
  @IsMongoId()
  @ApiProperty()
  readonly articleId: string;
}
