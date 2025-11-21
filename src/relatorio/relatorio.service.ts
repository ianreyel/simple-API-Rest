import { Injectable } from '@nestjs/common';
// Certifique-se de que PontoDescarte está exportado no Service de Pontos
import { PontosDescarteService, PontoDescarte } from '../pontos-descarte/pontos-descarte.service'; 
import { DescartesService } from '../descartes/descartes.service';

@Injectable()
export class RelatorioService {
  constructor(
    private readonly pontosService: PontosDescarteService,
    private readonly descartesService: DescartesService,
  ) {}

  gerarResumoEstatistico() {
    const todosPontos: PontoDescarte[] = this.pontosService.findAll(); 
    const todosDescartes = this.descartesService.findAll();

    const totalPontosDescarte = todosPontos.length;

    // 1. Lógica para encontrar o local com mais registros
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
        // Ajuste: subtraímos 1 porque o ID começa em 1 e o array em 0
        const pontoIndex = parseInt(id) - 1;
        const ponto = todosPontos[pontoIndex];
        pontoMaisRegistros = ponto ? ponto.nomeLocal : `ID ${id} (Ponto não encontrado)`; 
      }
    }

    // 2. CORREÇÃO DO ERRO (Ln 36): Adicionada a lógica para contar tipos de resíduos
    const contagemPorResiduo = todosDescartes.reduce((acc, descarte) => {
      const tipo = descarte.tipoResiduo;
      acc[tipo] = (acc[tipo] || 0) + 1;
      return acc;
    }, {});

    // Lógica para descobrir qual resíduo teve maior frequência
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
    
    // 3. CORREÇÃO DO ERRO (Ln 46): Adicionada a lógica para filtrar por data
    const descartesUltimos30Dias = todosDescartes.filter(descarte => {
        return new Date(descarte.data) >= trintaDiasAtras;
    });

    const mediaDiaria = descartesUltimos30Dias.length / 30;

    const totalMesAtual = descartesUltimos30Dias.length; 
    const totalMesAnteriorSimulado = Math.round(totalMesAtual / 1.25); 

    let crescimentoPercentual = 0;
    if (totalMesAnteriorSimulado > 0) {
        crescimentoPercentual = ((totalMesAtual - totalMesAnteriorSimulado) / totalMesAnteriorSimulado) * 100;
    } else if (totalMesAtual > 0) {
        crescimentoPercentual = 100; 
    }
    
    const mediaDiariaSegura = isNaN(mediaDiaria) ? 0 : mediaDiaria;
    const crescimentoPercentualSeguro = isNaN(crescimentoPercentual) ? 0 : crescimentoPercentual;

    return {
      localComMaisRegistros: pontoMaisRegistros,
      tipoResiduoMaisDescartado: tipoResiduoMaisFrequente,
      mediaDescartesDia: parseFloat(mediaDiariaSegura.toFixed(2)),
      totalUsuarios: totalUsuarios, 
      totalPontosDescarte: totalPontosDescarte, 
      variacaoPercentualMensal: parseFloat(crescimentoPercentualSeguro.toFixed(2)), 
    };
  }
}