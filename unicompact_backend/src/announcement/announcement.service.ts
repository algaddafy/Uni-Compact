import { Injectable, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { Repository } from 'typeorm';
import { Announcement } from './entities/announcement.entity'

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement) 
    private readonly AnnouncementRepository: Repository<Announcement>,
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto) {
    const petsDetails = this.AnnouncementRepository.create(createAnnouncementDto);
    await this.AnnouncementRepository.save(petsDetails);
    return {
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:petsDetails
    };
  }

  async findAll() {
    let findAll = await this.AnnouncementRepository.findAndCount();
    console.log(findAll[1])
    if(!findAll) throw new BadRequestException({ error : "Data Not Found" });
    return {
      status  : HttpStatus.OK,
      messsage : "Data fetch successfully",
      totalData : findAll && findAll.length ? findAll[1] :  0,
      result : findAll && findAll[0]
    }
  }

  async findOne(id: any) {
    const findOne = await this.AnnouncementRepository.findOne({
      where: {
          id: id,
      },
    })
    if(!findOne) throw new BadRequestException({ error : "Data Not Found" });
    return {
      status  : HttpStatus.OK,
      messsage : "Data fetch successfully",
      // totalData : findAll && findAll.length ? findAll.length :  0,
      result : findOne
    }
  }

 async update(id: any, updateAnnouncementDto: UpdateAnnouncementDto) {
    const result : any = await this.AnnouncementRepository.update({id }, updateAnnouncementDto);
    return {
      status  : HttpStatus.OK,
      messsage : "Data updated successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }

  async remove(id: any) {
    const result : any = await this.AnnouncementRepository.delete(id);
    return {
      status  : HttpStatus.OK,
      messsage : "Data deleted successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }
}
