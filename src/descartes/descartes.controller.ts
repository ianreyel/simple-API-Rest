import { Controller, Post, Body, Get } from '@nestjs/common';
import { DescartesService } from './descartes.service';
import { CreateDescarteDto } from './dto/create-descarte.dto';

@Controller('descartes') 
export class DescartesController {
  constructor(private readonly descartesService: DescartesService) {}

  @Post() 
  create(@Body() createDescarteDto: CreateDescarteDto) {
    return this.descartesService.create(createDescarteDto);
  }

  @Get() 
  findAll() {
    return this.descartesService.findAll();
  }
}