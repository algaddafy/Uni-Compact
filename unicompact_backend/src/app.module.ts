import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsModule } from './department/department.module';
import { StudentsModule } from './student/student.module';
import { TeachersModule } from './teacher/teacher.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'mad_project',
    autoLoadEntities: true,
    synchronize: true,
  }),
  ProductsModule,DepartmentsModule,ProductsModule,StudentsModule,TeachersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
