import { IsNumber} from "class-validator";
import { Type } from "class-transformer";
import {  ApiProperty } from "@nestjs/swagger";

export class getArticlesDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  readonly limit: number;
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  readonly offset: number;
}