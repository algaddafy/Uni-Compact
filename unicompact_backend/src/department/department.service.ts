import { Injectable, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity'

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department) 
    private readonly DepartmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const petsDetails = this.DepartmentRepository.create(createDepartmentDto);
    await this.DepartmentRepository.save(petsDetails);
    return {
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:petsDetails
    };
  }

  async findAll() {
    let findAll = await this.DepartmentRepository.findAndCount();
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
    const findOne = await this.DepartmentRepository.findOne({
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

 async update(id: any, updateDepartmentDto: UpdateDepartmentDto) {
    const result : any = await this.DepartmentRepository.update({id }, updateDepartmentDto);
    return {
      status  : HttpStatus.OK,
      messsage : "Data updated successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }

  async remove(id: any) {
    const result : any = await this.DepartmentRepository.delete(id);
    return {
      status  : HttpStatus.OK,
      messsage : "Data deleted successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }
}
