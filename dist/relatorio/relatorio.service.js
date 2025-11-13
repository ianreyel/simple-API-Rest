"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioService = void 0;
const common_1 = require("@nestjs/common");
const pontos_descarte_service_1 = require("../pontos-descarte/pontos-descarte.service");
const descartes_service_1 = require("../descartes/descartes.service");
let RelatorioService = class RelatorioService {
    pontosService;
    descartesService;
    constructor(pontosService, descartesService) {
        this.pontosService = pontosService;
        this.descartesService = descartesService;
    }
    gerarResumoEstatistico() {
        const todosPontos = this.pontosService.findAll();
        const todosDescartes = this.descartesService.findAll();
        const totalPontosDescarte = todosPontos.length;
        const contagemPorPonto = todosDescartes.reduce((acc, descarte) => {
            const id = descarte.id_pontoDescarte;
            acc[id] = (acc[id] || 0) + 1;
            return acc;
        }, {});
        let pontoMaisRegistros = 'N/A';
        let maxRegistros = 0;
        for (const id in contagemPorPonto) {
            if (contagemPorPonto[id] > maxRegistros) {
                maxRegistros = contagemPorPonto[id];
                const ponto = todosPontos.find(p => p.id === parseInt(id));
                pontoMaisRegistros = ponto ? ponto.nomeLocal : `ID ${id} (Ponto não encontrado)`;
            }
        }
        const contagemPorResiduo = todosDescartes.reduce((acc, descarte) => {
            const tipo = descarte.tipoResiduo;
            acc[tipo] = (acc[tipo] || 0) + 1;
            return acc;
        }, {});
        let tipoResiduoMaisFrequente = 'N/A';
        let maxFrequencia = 0;
        for (const tipo in contagemPorResiduo) {
            if (contagemPorResiduo[tipo] > maxFrequencia) {
                maxFrequencia = contagemPorResiduo[tipo];
                tipoResiduoMaisFrequente = tipo;
            }
        }
        const usuariosUnicos = new Set(todosDescartes.map(d => d.nomeUsuario));
        const totalUsuarios = usuariosUnicos.size;
        const trintaDiasAtras = new Date();
        trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
        const descartesUltimos30Dias = todosDescartes.filter(descarte => {
            return new Date(descarte.data) >= trintaDiasAtras;
        });
        const mediaDiaria = descartesUltimos30Dias.length / 30;
        const totalMesAtual = descartesUltimos30Dias.length;
        const totalMesAnteriorSimulado = Math.round(totalMesAtual / 1.25);
        let crescimentoPercentual = 0;
        if (totalMesAnteriorSimulado > 0) {
            crescimentoPercentual = ((totalMesAtual - totalMesAnteriorSimulado) / totalMesAnteriorSimulado) * 100;
        }
        else if (totalMesAtual > 0) {
            crescimentoPercentual = 100;
        }
        return {
            localComMaisRegistros: pontoMaisRegistros,
            tipoResiduoMaisFrequente: tipoResiduoMaisFrequente,
            mediaDescartesDiaria_Ultimos30Dias: parseFloat(mediaDiaria.toFixed(2)),
            totalUsuariosRegistrando: totalUsuarios,
            totalPontosDescarteCadastrados: totalPontosDescarte,
            crescimentoVolumetricoPercentual: parseFloat(crescimentoPercentual.toFixed(2)),
        };
    }
};
exports.RelatorioService = RelatorioService;
exports.RelatorioService = RelatorioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pontos_descarte_service_1.PontosDescarteService,
        descartes_service_1.DescartesService])
], RelatorioService);
//# sourceMappingURL=relatorio.service.js.map