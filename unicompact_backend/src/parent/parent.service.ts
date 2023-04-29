import { Injectable, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Repository } from 'typeorm';
import { Parent } from './entities/parent.entity'

@Injectable()
export class ParentsService {
  constructor(
    @InjectRepository(Parent) 
    private readonly ParentRepository: Repository<Parent>,
  ) {}

  async create(createParentDto: CreateParentDto) {
    const petsDetails = this.ParentRepository.create(createParentDto);
    await this.ParentRepository.save(petsDetails);
    return {
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:petsDetails
    };
  }

  async findAll() {
    let findAll = await this.ParentRepository.findAndCount();
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
    const findOne = await this.ParentRepository.findOne({
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

 async update(id: any, updateParentDto: UpdateParentDto) {
    const result : any = await this.ParentRepository.update({id }, updateParentDto);
    return {
      status  : HttpStatus.OK,
      messsage : "Data updated successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }

  async remove(id: any) {
    const result : any = await this.ParentRepository.delete(id);
    return {
      status  : HttpStatus.OK,
      messsage : "Data deleted successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }
}
