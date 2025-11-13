import { Injectable } from '@nestjs/common';
import { CreateDescarteDto } from './dto/create-descarte.dto';

export interface Descarte extends CreateDescarteDto { 
  id: number;
}

@Injectable()
export class DescartesService {
  private readonly descartes: Descarte[] = [];

  create(createDescarteDto: CreateDescarteDto): Descarte {
    const novoDescarte: Descarte = {
      id: this.descartes.length + 1,
      ...createDescarteDto,
    };

    this.descartes.push(novoDescarte);
    return novoDescarte;
  }

  findAll(): Descarte[] {
    return this.descartes;
  }
}