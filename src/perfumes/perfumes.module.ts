import { Module } from '@nestjs/common';
import { PerfumesService } from './perfumes.service';
import { PerfumesController } from './perfumes.controller';

@Module({
  controllers: [PerfumesController],
  providers: [PerfumesService],
})
export class PerfumesModule {}
