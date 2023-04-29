import { Controller, Get, Post, Body, Query, Res , Req } from '@nestjs/common';
import { ParentsService } from './parent.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { Request, Response } from 'express';

@Controller('parents')
export class ParentsController {
  constructor(private readonly ParentsService: ParentsService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response,@Body() createParentDto: CreateParentDto) {
    let createData = await this.ParentsService.create(createParentDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    let findAll: any = await this.ParentsService.findAll();
    return res.send(findAll);
  }

  @Get('/getOne')
  async findOne(@Req() req:Request, @Res() res: Response, @Query('id') id: any) {
    let getOne = await this.ParentsService.findOne(id);
    return res.send(getOne)
  }

  @Post('/update')
  async update(@Req() req:Request, @Res() res: Response, @Query('id') id: string, @Body() updateParentDto: CreateParentDto) {
    let updateData = await this.ParentsService.update(id, updateParentDto);
    return res.send(updateData);
  }

  @Post('/delete')
  async remove(@Req() req:Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await  this.ParentsService.remove(+id);
    return res.send(deleteData);
  }
}
