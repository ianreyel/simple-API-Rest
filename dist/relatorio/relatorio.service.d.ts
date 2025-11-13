import { PontosDescarteService } from '../pontos-descarte/pontos-descarte.service';
import { DescartesService } from '../descartes/descartes.service';
export declare class RelatorioService {
    private readonly pontosService;
    private readonly descartesService;
    constructor(pontosService: PontosDescarteService, descartesService: DescartesService);
    gerarResumoEstatistico(): {
        localComMaisRegistros: string;
        tipoResiduoMaisFrequente: string;
        mediaDescartesDiaria_Ultimos30Dias: number;
        totalUsuariosRegistrando: number;
        totalPontosDescarteCadastrados: number;
        crescimentoVolumetricoPercentual: number;
    };
}
