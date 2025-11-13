import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { PontosDescarteService } from './pontos-descarte.service';
import { CreatePontoDescarteDto } from './dto/create-pontos-descarte.dto';
import { UpdatePontoDescarteDto } from './dto/update-pontos-descarte.dto'; 

@Controller('pontos-descarte') 
export class PontosDescarteController {
  constructor(private readonly pontosDescarteService: PontosDescarteService) {}

  
  @Post() 
  create(@Body() createPontoDescarteDto: CreatePontoDescarteDto) {
    return this.pontosDescarteService.create(createPontoDescarteDto);
  }

  
  @Get() 
  findAll() {
    return this.pontosDescarteService.findAll();
  }

 
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.pontosDescarteService.findOne(+id); 
  }


  @Patch(':id') 
  update(@Param('id') id: string, @Body() updatePontosDescarteDto: UpdatePontoDescarteDto) {
    return this.pontosDescarteService.update(+id, updatePontosDescarteDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: string) {
    return this.pontosDescarteService.remove(+id);
  }
}