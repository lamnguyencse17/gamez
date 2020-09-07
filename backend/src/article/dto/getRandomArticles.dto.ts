import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class getRandomArticlesDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  readonly limit: number;
}
