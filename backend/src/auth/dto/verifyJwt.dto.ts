import { IsJWT } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class verifyJwtDto {
  @ApiProperty()
  @IsJWT()
  readonly token: string;
}
