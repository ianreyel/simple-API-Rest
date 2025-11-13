import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePontoDescarteDto } from './dto/create-pontos-descarte.dto'; 
import { UpdatePontoDescarteDto } from './dto/update-pontos-descarte.dto';


export interface PontoDescarte extends CreatePontoDescarteDto {
  id: number;
}

@Injectable()
export class PontosDescarteService {
  private readonly pontos: PontoDescarte[] = []; 

  create(createPontoDescarteDto: CreatePontoDescarteDto): PontoDescarte {
    
    const novoPonto: PontoDescarte = {
      id: this.pontos.length + 1,
      ...createPontoDescarteDto,
    };
    
    this.pontos.push(novoPonto);
    
    return novoPonto; 
  }

  findAll(): PontoDescarte[] {
    return this.pontos;
  }

  findOne(id: number): PontoDescarte | { error: string } {
    const ponto = this.pontos[id - 1];
    if (!ponto) {
      return { error: 'Ponto de descarte não encontrado' };
    }
    return ponto;
  }

  update(id: number, updatePontosDescarteDto: UpdatePontoDescarteDto): PontoDescarte | { error: string } {
    const pontoIndex = id - 1;
    if (this.pontos[pontoIndex]) {
      this.pontos[pontoIndex] = { 
        ...this.pontos[pontoIndex], 
        ...updatePontosDescarteDto 
      };
      return this.pontos[pontoIndex];
    }
    return { error: 'Ponto de descarte não encontrado para atualização' };
  }

  remove(id: number): { message: string } | { error: string } {
    const pontoIndex = id - 1;
    if (this.pontos[pontoIndex]) {
      this.pontos.splice(pontoIndex, 1);
      return { message: `Ponto de descarte com ID ${id} removido com sucesso` };
    }
    return { error: 'Ponto de descarte não encontrado para remoção' };
  }
}