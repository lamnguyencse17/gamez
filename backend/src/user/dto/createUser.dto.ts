import { IsEmail, IsNotEmpty, Max, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { EMAIL_MAX_LENGTH, NAME_MAX_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "../../constants";

export class createUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Max(NAME_MAX_LENGTH)
  readonly name: string;
  @ApiProperty()
  @IsEmail()
  @Max(EMAIL_MAX_LENGTH)
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @Min(PASSWORD_MIN_LENGTH)
  @Max(PASSWORD_MAX_LENGTH)
  password: string;
}