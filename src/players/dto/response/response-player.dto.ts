import { Expose, Transform } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class ResponsePlayerDto {

    @ApiProperty({
        description: 'ID único del jugador',
        example: 1,
    })
    @Expose()
    id_player:number

    @ApiProperty({
        description: 'ID del usuario asociado',
        example: 1,
    })
    @Expose()
    id_user:number

    @ApiProperty({
        description: 'Fecha de nacimiento del jugador',
        example: '2005-05-15',
        type: String,
        format: 'date-time',
    })
    @Expose()
    birth_date:Date

    @ApiProperty({
        description: 'Nacionalidad del jugador',
        example: 'Colombiana',
    })
    @Expose()
    nationality:string

    @ApiProperty({
        description: 'Pie hábil para jugar',
        example: 'Derecho',
    })
    @Expose()
    foot:string

    @ApiProperty({
        description: 'Mano hábil del jugador',
        example: 'Derecho',
    })
    @Expose()
    hand:string

    @ApiProperty({
        description: 'Posición principal de juego',
        example: 'Delantero',
    })
    @Expose()
    main_position:string

    @ApiProperty({
        description: 'Disciplina del jugador',
        example: 'Fútbol',
    })
    @Expose()
    discipline:string

    @ApiProperty({
        description: 'Estado del jugador',
        example: 'Activo',
    })
    @Expose()
    status:string

    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan',
    })
    @Expose()
    @Transform(({obj})=> obj.user?.name)
    user_name:string

    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Pérez',
    })
    @Expose()
    @Transform(({obj})=> obj.user?.lastname)
    user_lastname:string

    @ApiProperty({
        description: 'Documento del usuario',
        example: '1234567',
    })
    @Expose()
    @Transform(({obj})=> obj.user?.document)
    user_document:string
}
