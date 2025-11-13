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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PontosDescarteController = void 0;
const common_1 = require("@nestjs/common");
const pontos_descarte_service_1 = require("./pontos-descarte.service");
const create_pontos_descarte_dto_1 = require("./dto/create-pontos-descarte.dto");
const update_pontos_descarte_dto_1 = require("./dto/update-pontos-descarte.dto");
let PontosDescarteController = class PontosDescarteController {
    pontosDescarteService;
    constructor(pontosDescarteService) {
        this.pontosDescarteService = pontosDescarteService;
    }
    create(createPontoDescarteDto) {
        return this.pontosDescarteService.create(createPontoDescarteDto);
    }
    findAll() {
        return this.pontosDescarteService.findAll();
    }
    findOne(id) {
        return this.pontosDescarteService.findOne(+id);
    }
    update(id, updatePontosDescarteDto) {
        return this.pontosDescarteService.update(+id, updatePontosDescarteDto);
    }
    remove(id) {
        return this.pontosDescarteService.remove(+id);
    }
};
exports.PontosDescarteController = PontosDescarteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pontos_descarte_dto_1.CreatePontoDescarteDto]),
    __metadata("design:returntype", void 0)
], PontosDescarteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PontosDescarteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PontosDescarteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pontos_descarte_dto_1.UpdatePontoDescarteDto]),
    __metadata("design:returntype", void 0)
], PontosDescarteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PontosDescarteController.prototype, "remove", null);
exports.PontosDescarteController = PontosDescarteController = __decorate([
    (0, common_1.Controller)('pontos-descarte'),
    __metadata("design:paramtypes", [pontos_descarte_service_1.PontosDescarteService])
], PontosDescarteController);
//# sourceMappingURL=pontos-descarte.controller.js.map