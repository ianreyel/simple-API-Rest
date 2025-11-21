import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreatePontoDescarteDto {

    @IsString()
    @IsNotEmpty({ message: 'O nome do local é obrigatório.' })
    nomeLocal: string; 

    @IsString()
    @IsNotEmpty({ message: 'O bairro é obrigatório.' })
    bairro: string;

    @IsEnum(['publico', 'privado'], { message: 'O tipo de local deve ser "publico" ou "privado".' })
    tipoLocal: 'publico' | 'privado'; 

    @IsString()
    @IsNotEmpty({ message: 'A categoria dos resíduos é obrigatória.' })
    categoriaResiduos: string;

    @IsString()
    @IsOptional()
    geolocalizacao: string;
}