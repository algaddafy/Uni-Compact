import { Module } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { DepartmentsController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
