import { IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '../../constants';

export class passwordCompareDto {
  @ApiProperty()
  @IsNotEmpty()
  @Min(PASSWORD_MIN_LENGTH)
  @Max(PASSWORD_MAX_LENGTH)
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly hash: string;
}
