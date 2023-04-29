import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    @MinLength(4)
    name: string;
  
    @IsString()
    email: string;
  
    @IsString()
    password: string;

    @IsString()
    description: string;

    @IsString()
    status : string;

}
