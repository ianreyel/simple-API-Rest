import { CreateDescarteDto } from './dto/create-descarte.dto';
export interface Descarte extends CreateDescarteDto {
    id: number;
}
export declare class DescartesService {
    private readonly descartes;
    create(createDescarteDto: CreateDescarteDto): Descarte;
    findAll(): Descarte[];
}
