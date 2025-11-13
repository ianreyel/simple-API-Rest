import { Module } from '@nestjs/common';
import { DescartesService } from './descartes.service';
import { DescartesController } from './descartes.controller';

@Module({
  controllers: [DescartesController],
  providers: [DescartesService],
  exports: [DescartesService], 
})
export class DescartesModule {}