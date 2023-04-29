import { Controller, Get, Post, Body, Query, Res , Req } from '@nestjs/common';
import { AnnouncementsService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Request, Response } from 'express';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly AnnouncementsService: AnnouncementsService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response,@Body() createAnnouncementDto: CreateAnnouncementDto) {
    let createData = await this.AnnouncementsService.create(createAnnouncementDto);
    return res.send(createData);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    let findAll: any = await this.AnnouncementsService.findAll();
    return res.send(findAll);
  }

  @Get('/getOne')
  async findOne(@Req() req:Request, @Res() res: Response, @Query('id') id: any) {
    let getOne = await this.AnnouncementsService.findOne(id);
    return res.send(getOne)
  }

  @Post('/update')
  async update(@Req() req:Request, @Res() res: Response, @Query('id') id: string, @Body() updateAnnouncementDto: CreateAnnouncementDto) {
    let updateData = await this.AnnouncementsService.update(id, updateAnnouncementDto);
    return res.send(updateData);
  }

  @Post('/delete')
  async remove(@Req() req:Request, @Res() res: Response, @Query('id') id: string) {
    let deleteData = await  this.AnnouncementsService.remove(+id);
    return res.send(deleteData);
  }
}
