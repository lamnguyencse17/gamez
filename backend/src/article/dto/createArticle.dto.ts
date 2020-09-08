import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class createArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly articleTitle: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly articleDescription: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly articleContent: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly articleThumbnail: string;
  @ApiProperty()
  @IsBoolean()
  readonly isDraft: boolean;
  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  readonly isDeleted?: boolean;
}
