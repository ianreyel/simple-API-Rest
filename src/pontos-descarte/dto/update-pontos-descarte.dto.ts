
import { PartialType } from '@nestjs/mapped-types';
import { CreatePontoDescarteDto } from './create-pontos-descarte.dto';

export class UpdatePontoDescarteDto extends PartialType(CreatePontoDescarteDto) {
} 

