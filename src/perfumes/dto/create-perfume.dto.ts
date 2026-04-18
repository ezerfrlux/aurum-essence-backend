import { IsString, IsNumber, MinLength, IsPositive, IsInt, IsUUID } from 'class-validator';

export class CreatePerfumeDto {
  @IsUUID()
  @MinLength(3)
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  stock: number;
}