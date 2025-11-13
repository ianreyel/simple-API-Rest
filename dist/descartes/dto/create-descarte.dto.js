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
exports.CreateDescarteDto = exports.TipoResiduoEnum = void 0;
const class_validator_1 = require("class-validator");
var TipoResiduoEnum;
(function (TipoResiduoEnum) {
    TipoResiduoEnum["PLASTICO"] = "pl\u00E1stico";
    TipoResiduoEnum["PAPEL"] = "papel";
    TipoResiduoEnum["ORGANICO"] = "org\u00E2nico";
    TipoResiduoEnum["ELETRONICO"] = "eletr\u00F4nico";
    TipoResiduoEnum["VIDRO"] = "vidro";
    TipoResiduoEnum["OUTROS"] = "outros";
})(TipoResiduoEnum || (exports.TipoResiduoEnum = TipoResiduoEnum = {}));
class CreateDescarteDto {
    nomeUsuario;
    id_pontoDescarte;
    tipoResiduo;
    data;
}
exports.CreateDescarteDto = CreateDescarteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do usuário é obrigatório.' }),
    __metadata("design:type", String)
], CreateDescarteDto.prototype, "nomeUsuario", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do ponto de descarte é obrigatório.' }),
    __metadata("design:type", Number)
], CreateDescarteDto.prototype, "id_pontoDescarte", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TipoResiduoEnum, { message: 'Tipo de resíduo inválido. Escolha entre: plástico, papel, orgânico, eletrônico, vidro, outros.' }),
    __metadata("design:type", String)
], CreateDescarteDto.prototype, "tipoResiduo", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'O formato da data deve ser válido (ISO 8601).' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A data do descarte é obrigatória.' }),
    __metadata("design:type", String)
], CreateDescarteDto.prototype, "data", void 0);
//# sourceMappingURL=create-descarte.dto.js.map