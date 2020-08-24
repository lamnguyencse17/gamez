import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class passwordCompareDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly hash: string;
}