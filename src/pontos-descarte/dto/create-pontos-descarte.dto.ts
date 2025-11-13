import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export enum TipoLocalEnum {
  PUBLICO = 'publico',
  PRIVADO = 'privado',
}

export class CreatePontoDescarteDto {
  
  @IsString()
  @IsNotEmpty({ message: 'O nome do local é obrigatório.' })
  nomeLocal: string;

  @IsString()
  @IsNotEmpty({ message: 'O bairro é obrigatório.' })
  bairro: string;

  @IsEnum(TipoLocalEnum, { message: 'O tipo de local deve ser "publico" ou "privado".' })
  tipoLocal: TipoLocalEnum; 

  @IsString()
  @IsNotEmpty({ message: 'A categoria dos resíduos é obrigatória.' })
  categoriaResiduos: string;

  @IsString()
  @IsOptional()
  geolocalizacao: string;
}