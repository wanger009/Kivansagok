import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateWishDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  content?: string;
}