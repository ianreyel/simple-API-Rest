import { DescartesService } from './descartes.service';
import { CreateDescarteDto } from './dto/create-descarte.dto';
export declare class DescartesController {
    private readonly descartesService;
    constructor(descartesService: DescartesService);
    create(createDescarteDto: CreateDescarteDto): import("./descartes.service").Descarte;
    findAll(): import("./descartes.service").Descarte[];
}
