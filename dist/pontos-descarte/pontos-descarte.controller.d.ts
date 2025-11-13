import { PontosDescarteService } from './pontos-descarte.service';
import { CreatePontoDescarteDto } from './dto/create-pontos-descarte.dto';
import { UpdatePontoDescarteDto } from './dto/update-pontos-descarte.dto';
export declare class PontosDescarteController {
    private readonly pontosDescarteService;
    constructor(pontosDescarteService: PontosDescarteService);
    create(createPontoDescarteDto: CreatePontoDescarteDto): import("./pontos-descarte.service").PontoDescarte;
    findAll(): import("./pontos-descarte.service").PontoDescarte[];
    findOne(id: string): import("./pontos-descarte.service").PontoDescarte | {
        error: string;
    };
    update(id: string, updatePontosDescarteDto: UpdatePontoDescarteDto): import("./pontos-descarte.service").PontoDescarte | {
        error: string;
    };
    remove(id: string): {
        message: string;
    } | {
        error: string;
    };
}
