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
exports.CreatePontoDescarteDto = exports.TipoLocalEnum = void 0;
const class_validator_1 = require("class-validator");
var TipoLocalEnum;
(function (TipoLocalEnum) {
    TipoLocalEnum["PUBLICO"] = "publico";
    TipoLocalEnum["PRIVADO"] = "privado";
})(TipoLocalEnum || (exports.TipoLocalEnum = TipoLocalEnum = {}));
class CreatePontoDescarteDto {
    nomeLocal;
    bairro;
    tipoLocal;
    categoriaResiduos;
    geolocalizacao;
}
exports.CreatePontoDescarteDto = CreatePontoDescarteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do local é obrigatório.' }),
    __metadata("design:type", String)
], CreatePontoDescarteDto.prototype, "nomeLocal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O bairro é obrigatório.' }),
    __metadata("design:type", String)
], CreatePontoDescarteDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TipoLocalEnum, { message: 'O tipo de local deve ser "publico" ou "privado".' }),
    __metadata("design:type", String)
], CreatePontoDescarteDto.prototype, "tipoLocal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A categoria dos resíduos é obrigatória.' }),
    __metadata("design:type", String)
], CreatePontoDescarteDto.prototype, "categoriaResiduos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePontoDescarteDto.prototype, "geolocalizacao", void 0);
//# sourceMappingURL=create-pontos-descarte.dto.js.map