import { IsBoolean, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class CreatePersonalInformationDto {
    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del usuario'})
    id_user:number

    @IsString()
    @IsNotEmpty({message:'Es requerido el pais'})
    @Length(2,100,{message:'El pais debe tener minimo 2 caracteres y maximo 100'})
    country:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el departamento'})
    @Length(2,100,{message:'El departamento debe tener minimo 2 caracteres y maximo 100'})
    deparment:string

    @IsString()
    @IsNotEmpty({message:'Es requerida la ciudad'})
    @Length(2,100,{message:'La ciudad debe tener minimo 2 caracteres y maximo 100'})
    city:string

    @IsString()
    @IsNotEmpty({message:'Es requerida la direccion'})
    @Length(2,100,{message:'La direccion debe tener minimo 2 caracteres y maximo 100'})
    address:string

    @IsInt()
    @IsNotEmpty({message:'Es requerida la cantidad de hermanos'})
    brothers:number

    @IsBoolean()
    @IsNotEmpty({message:'Es requerida la informacion del padre'})
    father:boolean

    @IsBoolean()
    @IsNotEmpty({message:'Es requerida la informacion de la madre'})
    mother:boolean
}
