import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class getArticlesInTagDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @ApiPropertyOptional({ default: 10 })
  readonly limit: number = 10;
  @ApiProperty()
  @ApiPropertyOptional({ default: 0 })
  @Type(() => Number)
  @IsNumber()
  readonly offset: number = 0;
}
