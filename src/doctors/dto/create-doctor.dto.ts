import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDoctorDto {
    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del usuario'})
    id_user:number

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty({message:'Es requerida la fecha de nacimiento'})
    birth_date:Date

    @IsString()
    @IsNotEmpty({message:'Es requerida la nacionalidad'})
    nationality:string
    
    @IsString()
    @IsNotEmpty({message:'Es requerida la profesion'})
    profession:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el titulo de la profesion'})
    job_title:string

    @IsString()
    @IsNotEmpty({message:'Es requerida una descripcion profesional'})
    description:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el estado'})
    status:string
}
