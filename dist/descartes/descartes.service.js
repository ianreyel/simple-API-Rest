"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescartesService = void 0;
const common_1 = require("@nestjs/common");
let DescartesService = class DescartesService {
    descartes = [];
    create(createDescarteDto) {
        const novoDescarte = {
            id: this.descartes.length + 1,
            ...createDescarteDto,
        };
        this.descartes.push(novoDescarte);
        return novoDescarte;
    }
    findAll() {
        return this.descartes;
    }
};
exports.DescartesService = DescartesService;
exports.DescartesService = DescartesService = __decorate([
    (0, common_1.Injectable)()
], DescartesService);
//# sourceMappingURL=descartes.service.js.map