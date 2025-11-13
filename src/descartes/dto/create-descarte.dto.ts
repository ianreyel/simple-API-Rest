import { IsString, IsNotEmpty, IsNumber, IsDateString, IsEnum } from 'class-validator';

export enum TipoResiduoEnum {
  PLASTICO = 'plástico',
  PAPEL = 'papel',
  ORGANICO = 'orgânico',
  ELETRONICO = 'eletrônico',
  VIDRO = 'vidro',
  OUTROS = 'outros',
}

export class CreateDescarteDto {
  
  
  @IsString()
  @IsNotEmpty({ message: 'O nome do usuário é obrigatório.' })
  nomeUsuario: string;


  @IsNumber()
  @IsNotEmpty({ message: 'O ID do ponto de descarte é obrigatório.' })
  id_pontoDescarte: number;

  
  @IsEnum(TipoResiduoEnum, { message: 'Tipo de resíduo inválido. Escolha entre: plástico, papel, orgânico, eletrônico, vidro, outros.' })
  tipoResiduo: TipoResiduoEnum;

  @IsDateString({}, { message: 'O formato da data deve ser válido (ISO 8601).' })
  @IsNotEmpty({ message: 'A data do descarte é obrigatória.' })
  data: string;
}