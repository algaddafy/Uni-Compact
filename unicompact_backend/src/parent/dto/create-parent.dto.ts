import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateParentDto {
    @IsString()
    @MinLength(4)
    title: string;
  
    @IsString()
    category: string;
  
    @IsString()
    subcategory: string;

    @IsString()
    description: string;

    @IsString()
    status : string;

}
