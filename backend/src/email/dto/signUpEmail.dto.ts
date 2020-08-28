import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class signUpEmailDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly hash: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}
