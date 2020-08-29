import { IsNotEmpty, Max, Min, IsMongoId, IsAlpha } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  NAME_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '../../constants';

export class updateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsAlpha()
  @Max(NAME_MAX_LENGTH)
  readonly name: string;
  @ApiProperty()
  @IsAlpha()
  @Min(PASSWORD_MIN_LENGTH)
  @Max(PASSWORD_MAX_LENGTH)
  readonly password?: string;
  @IsMongoId()
  @ApiProperty()
  readonly _id: string;
}
