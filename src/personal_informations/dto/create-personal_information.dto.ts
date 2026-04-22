import { IsBoolean, IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonalInformationDto {
    @ApiProperty({
        description: 'ID del usuario asociado',
        example: 1,
    })
    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del usuario'})
    id_user:number

    @ApiProperty({
        description: 'País de residencia',
        example: 'Colombia',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el pais'})
    @Length(2,100,{message:'El pais debe tener minimo 2 caracteres y maximo 100'})
    country:string

    @ApiProperty({
        description: 'Departamento de residencia',
        example: 'Bogotá',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el departamento'})
    @Length(2,100,{message:'El departamento debe tener minimo 2 caracteres y maximo 100'})
    deparment:string

    @ApiProperty({
        description: 'Ciudad de residencia',
        example: 'Bogotá D.C.',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la ciudad'})
    @Length(2,100,{message:'La ciudad debe tener minimo 2 caracteres y maximo 100'})
    city:string

    @ApiProperty({
        description: 'Dirección de residencia',
        example: 'Calle 1 #2-3',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la direccion'})
    @Length(2,100,{message:'La direccion debe tener minimo 2 caracteres y maximo 100'})
    address:string

    @ApiProperty({
        description: 'Cantidad de hermanos',
        example: 2,
    })
    @IsInt()
    @IsNotEmpty({message:'Es requerida la cantidad de hermanos'})
    brothers:number

    @ApiProperty({
        description: 'Indica si el padre está vivo',
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty({message:'Es requerida la informacion del padre'})
    father:boolean

    @ApiProperty({
        description: 'Indica si la madre está viva',
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty({message:'Es requerida la informacion de la madre'})
    mother:boolean
}
