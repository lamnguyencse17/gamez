import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class getTagNamesDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  readonly limit: number = 10;
}
