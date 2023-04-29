import { Controller, Get, Post, Body, Query, Res , Req } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Request, Response } from 'express';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly DepartmentsService: DepartmentsService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response,@Body() createDepartmentDto: CreateDepartmentDto) {
    let createData = await this.DepartmentsService.create(createDepartmentDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    let findAll: any = await this.DepartmentsService.findAll();
    return res.send(findAll);
  }

  @Get('/getOne')
  async findOne(@Req() req:Request, @Res() res: Response, @Query('id') id: any) {
    let getOne = await this.DepartmentsService.findOne(id);
    return res.send(getOne)
  }

  @Post('/update')
  async update(@Req() req:Request, @Res() res: Response, @Query('id') id: string, @Body() updateDepartmentDto: CreateDepartmentDto) {
    let updateData = await this.DepartmentsService.update(id, updateDepartmentDto);
    return res.send(updateData);
  }

  @Post('/delete')
  async remove(@Req() req:Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await  this.DepartmentsService.remove(+id);
    return res.send(deleteData);
  }
}
