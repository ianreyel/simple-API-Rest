"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioModule = void 0;
const common_1 = require("@nestjs/common");
const relatorio_service_1 = require("./relatorio.service");
const relatorio_controller_1 = require("./relatorio.controller");
const pontos_descarte_module_1 = require("../pontos-descarte/pontos-descarte.module");
const descartes_module_1 = require("../descartes/descartes.module");
let RelatorioModule = class RelatorioModule {
};
exports.RelatorioModule = RelatorioModule;
exports.RelatorioModule = RelatorioModule = __decorate([
    (0, common_1.Module)({
        imports: [pontos_descarte_module_1.PontosDescarteModule, descartes_module_1.DescartesModule],
        controllers: [relatorio_controller_1.RelatorioController],
        providers: [relatorio_service_1.RelatorioService],
    })
], RelatorioModule);
//# sourceMappingURL=relatorio.module.js.map