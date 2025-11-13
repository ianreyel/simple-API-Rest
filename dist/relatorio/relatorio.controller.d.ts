import { RelatorioService } from './relatorio.service';
export declare class RelatorioController {
    private readonly relatorioService;
    constructor(relatorioService: RelatorioService);
    getRelatorioEstatistico(): {
        localComMaisRegistros: string;
        tipoResiduoMaisFrequente: string;
        mediaDescartesDiaria_Ultimos30Dias: number;
        totalUsuariosRegistrando: number;
        totalPontosDescarteCadastrados: number;
        crescimentoVolumetricoPercentual: number;
    };
}
