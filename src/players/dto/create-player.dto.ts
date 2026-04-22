import { Type } from "class-transformer"
import { IsDate, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreatePlayerDto {
    @ApiProperty({
        description: 'ID del usuario jugador',
        example: 1,
    })
    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del usuario'})
    id_user:number

    @ApiProperty({
        description: 'Fecha de nacimiento del jugador',
        example: '2005-05-15',
        type: String,
        format: 'date-time',
    })
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty({message:'Es requerida la fecha de nacimiento'})
    birth_date:Date

    @ApiProperty({
        description: 'Nacionalidad del jugador',
        example: 'Colombiana',
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la nacionalidad'})
    nationality:string

    @ApiProperty({
        description: 'Pie hábil para jugar (Derecho/Izquierdo)',
        example: 'Derecho',
        maxLength: 10,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la pierna habil'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    foot:string

    @ApiProperty({
        description: 'Mano hábil del jugador (Derecho/Izquierdo)',
        example: 'Derecho',
        maxLength: 10,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la mano habil'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    hand:string

    @ApiProperty({
        description: 'Posición principal de juego',
        example: 'Delantero',
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la posicion de juego'})
    @MaxLength(50,{message:'No puede exceder los 50 caracteres'})
    main_position:string

    @ApiProperty({
        description: 'Disciplina del jugador',
        example: 'Fútbol',
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida la disciplina'})
    @MaxLength(100,{message:'No puede exceder los 100 caracteres'})
    discipline:string

    @ApiProperty({
        description: 'Estado del jugador (Activo/Inactivo)',
        example: 'Activo',
        maxLength: 10,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerida el estado'})
    @MaxLength(10,{message:'No puede exceder los 10 caracteres'})
    status:string

}
