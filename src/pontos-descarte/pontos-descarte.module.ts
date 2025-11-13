import { Module } from '@nestjs/common';
import { PontosDescarteService } from './pontos-descarte.service';
import { PontosDescarteController } from './pontos-descarte.controller';

@Module({
  controllers: [PontosDescarteController],
  providers: [PontosDescarteService],
  exports: [PontosDescarteService], 
})
export class PontosDescarteModule {}