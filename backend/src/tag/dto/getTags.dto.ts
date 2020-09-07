import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class getTagsDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @ApiPropertyOptional({ default: 6 })
  readonly limit: number = 6;
  @ApiProperty()
  @ApiPropertyOptional({ default: 0 })
  @Type(() => Number)
  @IsNumber()
  readonly offset: number = 0;
}
