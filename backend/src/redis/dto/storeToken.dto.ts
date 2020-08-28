import { IsJWT, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NANOID_LENGTH } from '../../constants';

export class storeTokenDto {
  @ApiProperty()
  @Length(NANOID_LENGTH, NANOID_LENGTH)
  readonly hash: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsJWT()
  readonly token: string;
}
