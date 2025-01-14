import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateWishDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @MinLength(10)
  content: string;
}