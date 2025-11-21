import { Injectable } from '@nestjs/common';
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
            ...createPontoDescarteDto
        };
        this.pontos.push(novoPonto);
        
        return novoPonto;
    }

    findAll(): PontoDescarte[] {
        return this.pontos;
    }

    findOne(id: number): PontoDescarte {
        return this.pontos[id - 1]; 
    }
    
    update(id: number, updatePontoDescarteDto: UpdatePontoDescarteDto): PontoDescarte | null {
        const pontoIndex = id - 1;
        if (this.pontos[pontoIndex]) {
            this.pontos[pontoIndex] = {
                ...this.pontos[pontoIndex],
                ...updatePontoDescarteDto,
                id: id, 
            };
            return this.pontos[pontoIndex];
        }
        return null;
    }
    remove(id: number): boolean {
        const pontoIndex = id - 1;
        if (pontoIndex > -1) {
            this.pontos.splice(pontoIndex, 1);
            return true;
        }
        return false;
    }
}