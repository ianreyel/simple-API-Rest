"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescartesModule = void 0;
const common_1 = require("@nestjs/common");
const descartes_service_1 = require("./descartes.service");
const descartes_controller_1 = require("./descartes.controller");
let DescartesModule = class DescartesModule {
};
exports.DescartesModule = DescartesModule;
exports.DescartesModule = DescartesModule = __decorate([
    (0, common_1.Module)({
        controllers: [descartes_controller_1.DescartesController],
        providers: [descartes_service_1.DescartesService],
        exports: [descartes_service_1.DescartesService],
    })
], DescartesModule);
//# sourceMappingURL=descartes.module.js.map