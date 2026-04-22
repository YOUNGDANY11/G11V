import { Expose, Transform } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class ResponsePersonalInformationDto{

    @ApiProperty({
        description: 'ID único de la información personal',
        example: 1,
    })
    @Expose()
    id_per_inf:number

    @ApiProperty({
        description: 'ID del usuario asociado',
        example: 1,
    })
    @Expose()
    id_user:number

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
    @Transform(({obj}) => obj.user?.lastname)
    user_lastname:string

    @ApiProperty({
        description: 'País de residencia',
        example: 'Colombia',
    })
    @Expose()
    country:string

    @ApiProperty({
        description: 'Departamento de residencia',
        example: 'Bogotá',
    })
    @Expose()
    deparment:string

    @ApiProperty({
        description: 'Ciudad de residencia',
        example: 'Bogotá D.C.',
    })
    @Expose()
    city:string

    @ApiProperty({
        description: 'Dirección de residencia',
        example: 'Calle 1 #2-3',
    })
    @Expose()
    address:string

    @ApiProperty({
        description: 'Cantidad de hermanos',
        example: 2,
    })
    @Expose()
    brothers:number

    @ApiProperty({
        description: 'Indica si el padre está vivo',
        example: true,
    })
    @Expose()
    father:boolean

    @ApiProperty({
        description: 'Indica si la madre está viva',
        example: true,
    })
    @Expose()
    mother:boolean

    @ApiProperty({
        description: 'Fecha de creación del registro',
        example: '2024-01-15T10:30:00Z',
    })
    @Expose()
    created_at:Date

    @ApiProperty({
        description: 'Fecha de última actualización',
        example: '2024-01-20T15:45:00Z',
    })
    @Expose()
    updated_at:Date
}