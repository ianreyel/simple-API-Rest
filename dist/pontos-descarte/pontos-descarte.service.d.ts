import { CreatePontoDescarteDto } from './dto/create-pontos-descarte.dto';
import { UpdatePontoDescarteDto } from './dto/update-pontos-descarte.dto';
export interface PontoDescarte extends CreatePontoDescarteDto {
    id: number;
}
export declare class PontosDescarteService {
    private readonly pontos;
    create(createPontoDescarteDto: CreatePontoDescarteDto): PontoDescarte;
    findAll(): PontoDescarte[];
    findOne(id: number): PontoDescarte | {
        error: string;
    };
    update(id: number, updatePontosDescarteDto: UpdatePontoDescarteDto): PontoDescarte | {
        error: string;
    };
    remove(id: number): {
        message: string;
    } | {
        error: string;
    };
}
