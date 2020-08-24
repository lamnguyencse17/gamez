import { IsBoolean, IsMongoId, IsNotEmpty } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class createArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly articleTitle: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly articleDescription: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly articleContent: string;
  @ApiProperty()
  @IsBoolean()
  readonly isDraft: boolean;
  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  readonly isDeleted?: boolean;
  @ApiProperty()
  @IsMongoId()
  readonly articleAuthor: string;
}