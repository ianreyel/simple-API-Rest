import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontosDescarteModule } from './pontos-descarte/pontos-descarte.module';
import { DescartesModule } from './descartes/descartes.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/', 
    }),
    PontosDescarteModule, 
    DescartesModule, 
    RelatorioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}