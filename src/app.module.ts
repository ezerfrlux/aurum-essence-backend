import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfumesModule } from './perfumes/perfumes.module';
import { BrandsModule } from './brands/brands.module';
import { Brand } from './brands/entities/brand.entity';
import { Perfume } from './perfumes/entities/perfume.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'ezer',
      password: '12345678',
      database: 'aurum_essence_db',
      autoLoadEntities: true,
      entities: [Brand, Perfume],
      synchronize: true,
    }),
    PerfumesModule,
    BrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
