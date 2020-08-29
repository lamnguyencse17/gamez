import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class verifyDto {
  @ApiProperty()
  @IsString()
  @Length(10, 10)
  readonly verifyHash: string;
}
