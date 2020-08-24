import { IsNumber} from "class-validator";
import { Type } from "class-transformer";

export class getArticlesDto {
  @Type(() => Number)
  @IsNumber()
  readonly limit: number;

  @Type(() => Number)
  @IsNumber()
  readonly offset: number;
}