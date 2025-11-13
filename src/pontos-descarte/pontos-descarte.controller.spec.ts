import { Test, TestingModule } from '@nestjs/testing';
import { PontosDescarteController } from './pontos-descarte.controller';
import { PontosDescarteService } from './pontos-descarte.service';

describe('PontosDescarteController', () => {
  let controller: PontosDescarteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontosDescarteController],
      providers: [PontosDescarteService],
    }).compile();

    controller = module.get<PontosDescarteController>(PontosDescarteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
