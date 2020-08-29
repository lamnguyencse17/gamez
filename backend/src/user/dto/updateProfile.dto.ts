import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
  ValidateIf,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  NAME_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '../../constants';

export class updateProfileDto {
  @ApiProperty()
  @ValidateIf((object, name) => {
    return !object.newPassword || !!name;
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(NAME_MAX_LENGTH)
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @ValidateIf((object, newPassword) => {
    return !object.name || !!newPassword;
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(PASSWORD_MAX_LENGTH)
  @MinLength(PASSWORD_MIN_LENGTH)
  readonly newPassword: string;
}
