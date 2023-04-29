import { Controller, Get, Post, Body, Query, Res , Req } from '@nestjs/common';
import { TeachersService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Request, Response } from 'express';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly TeachersService: TeachersService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response,@Body() createTeacherDto: CreateTeacherDto) {
    let createData = await this.TeachersService.create(createTeacherDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    let findAll: any = await this.TeachersService.findAll();
    return res.send(findAll);
  }

  @Get('/getOne')
  async findOne(@Req() req:Request, @Res() res: Response, @Query('id') id: any) {
    let getOne = await this.TeachersService.findOne(id);
    return res.send(getOne)
  }

  @Post('/update')
  async update(@Req() req:Request, @Res() res: Response, @Query('id') id: string, @Body() updateTeacherDto: CreateTeacherDto) {
    let updateData = await this.TeachersService.update(id, updateTeacherDto);
    return res.send(updateData);
  }

  @Post('/delete')
  async remove(@Req() req:Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await  this.TeachersService.remove(+id);
    return res.send(deleteData);
  }
}
