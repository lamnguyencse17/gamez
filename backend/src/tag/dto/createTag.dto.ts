import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class createTagDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly tagName: string;
  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  readonly isDeleted?: boolean = false;
}
