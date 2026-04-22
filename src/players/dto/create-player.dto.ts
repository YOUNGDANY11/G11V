import { Type } from "class-transformer"
import { IsDate, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreatePlayerDto {
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
    @IsNotEmpty({message:'Es requerida la pierna habil'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    foot:string

    @IsString()
    @IsNotEmpty({message:'Es requerida la mano habil'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    hand:string

    @IsString()
    @IsNotEmpty({message:'Es requerida la posicion de juego'})
    @MaxLength(50,{message:'No puede exceder los 50 caracteres'})
    main_position:string

    @IsString()
    @IsNotEmpty({message:'Es requerida la disciplina'})
    @MaxLength(100,{message:'No puede exceder los 100 caracteres'})
    discipline:string

    @IsString()
    @IsNotEmpty({message:'Es requerida el estado'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    status:string

}
