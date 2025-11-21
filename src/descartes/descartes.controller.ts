import { Controller, Post, Body, Get, Query } from '@nestjs/common'; 
import { DescartesService, Descarte } from './descartes.service';
import { CreateDescarteDto } from './dto/create-descarte.dto';

@Controller('descartes')
export class DescartesController {
  constructor(private readonly descartesService: DescartesService) {}

  @Post()
  create(@Body() createDescarteDto: CreateDescarteDto) {
    return this.descartesService.create(createDescarteDto);
  }

  @Get()
  findAll(@Query() query: any): Descarte[] {
    return this.descartesService.findAll(query);
  }
}