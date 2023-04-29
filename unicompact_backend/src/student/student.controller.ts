import { Controller, Get, Post, Body, Query, Res , Req } from '@nestjs/common';
import { StudentsService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Request, Response } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private readonly StudentsService: StudentsService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response,@Body() createStudentDto: CreateStudentDto) {
    let createData = await this.StudentsService.create(createStudentDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    let findAll: any = await this.StudentsService.findAll();
    return res.send(findAll);
  }

  @Get('/getOne')
  async findOne(@Req() req:Request, @Res() res: Response, @Query('id') id: any) {
    let getOne = await this.StudentsService.findOne(id);
    return res.send(getOne)
  }

  @Post('/update')
  async update(@Req() req:Request, @Res() res: Response, @Query('id') id: string, @Body() updateStudentDto: CreateStudentDto) {
    let updateData = await this.StudentsService.update(id, updateStudentDto);
    return res.send(updateData);
  }

  @Post('/delete')
  async remove(@Req() req:Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await  this.StudentsService.remove(+id);
    return res.send(deleteData);
  }
}
