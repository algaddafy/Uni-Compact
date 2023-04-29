import { Module } from '@nestjs/common';
import { ParentsService } from './parent.service';
import { ParentsController } from './parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent])],
  controllers: [ParentsController],
  providers: [ParentsService]
})
export class ParentsModule {}
