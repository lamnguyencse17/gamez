import { IsBoolean, IsMongoId, IsNotEmpty } from "class-validator";

export class createArticleDto {
  @IsNotEmpty()
  readonly articleTitle: string;
  @IsNotEmpty()
  readonly articleDescription: string;
  @IsNotEmpty()
  readonly articleContent: string;
  @IsBoolean()
  readonly isDraft: boolean;
  @IsBoolean()
  readonly isDeleted?: boolean;
  @IsMongoId()
  readonly articleAuthor: string
}