import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'El nombre de la marca debe ser un texto' })
  @MinLength(2, { message: 'El nombre de la marca es muy corto' })
  @MaxLength(50, { message: 'El nombre de la marca es muy largo' })
  name: string;
}
