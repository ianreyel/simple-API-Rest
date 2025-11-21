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

  findAll(filtros: any = {}): Descarte[] {
    let resultados = this.descartes;

    if (filtros.nomeUsuario) {
        const nomeLower = filtros.nomeUsuario.toLowerCase();
        resultados = resultados.filter(d => d.nomeUsuario.toLowerCase().includes(nomeLower));
    }
    
    if (filtros.tipoResiduo) {
        resultados = resultados.filter(d => d.tipoResiduo === filtros.tipoResiduo);
    }

    if (filtros.id_pontoDescarte) {
        const id = parseInt(filtros.id_pontoDescarte);
        resultados = resultados.filter(d => d.id_pontoDescarte === id);
    }
    
    if (filtros.dataInicio) {
        const dataInicio = new Date(filtros.dataInicio);
        resultados = resultados.filter(d => new Date(d.data) >= dataInicio);
    }
    
    if (filtros.dataFim) {
        const dataFim = new Date(filtros.dataFim);
        dataFim.setHours(23, 59, 59, 999); 
        resultados = resultados.filter(d => new Date(d.data) <= dataFim);
    }

    return resultados;
  }
}