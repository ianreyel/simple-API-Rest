"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PontosDescarteService = void 0;
const common_1 = require("@nestjs/common");
let PontosDescarteService = class PontosDescarteService {
    pontos = [];
    create(createPontoDescarteDto) {
        const novoPonto = {
            id: this.pontos.length + 1,
            ...createPontoDescarteDto,
        };
        this.pontos.push(novoPonto);
        return novoPonto;
    }
    findAll() {
        return this.pontos;
    }
    findOne(id) {
        const ponto = this.pontos[id - 1];
        if (!ponto) {
            return { error: 'Ponto de descarte não encontrado' };
        }
        return ponto;
    }
    update(id, updatePontosDescarteDto) {
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
    remove(id) {
        const pontoIndex = id - 1;
        if (this.pontos[pontoIndex]) {
            this.pontos.splice(pontoIndex, 1);
            return { message: `Ponto de descarte com ID ${id} removido com sucesso` };
        }
        return { error: 'Ponto de descarte não encontrado para remoção' };
    }
};
exports.PontosDescarteService = PontosDescarteService;
exports.PontosDescarteService = PontosDescarteService = __decorate([
    (0, common_1.Injectable)()
], PontosDescarteService);
//# sourceMappingURL=pontos-descarte.service.js.map