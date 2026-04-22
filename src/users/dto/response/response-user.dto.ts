import { Exclude, Expose, Transform } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class ResponseUserDto {

    @ApiProperty({
        description: 'ID único del usuario',
        example: 1,
    })
    @Expose()
    id_user:number

    @ApiProperty({
        description: 'ID del rol asociado',
        example: 1,
    })
    @Expose()
    id_role:number

    @ApiProperty({
        description: 'Nombre del rol del usuario',
        example: 'Administrador',
    })
    @Expose()
    @Transform(({obj}) => obj.role?.name)
    role_name:string

    @ApiProperty({
        description: 'Código del rol',
        example: 'ADMIN',
    })
    @Expose()
    @Transform(({obj}) => obj.role?.code)
    role_code:string

    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan',
    })
    @Expose()
    name:string

    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Pérez',
    })
    @Expose()
    lastname:string

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan@example.com',
    })
    @Expose()
    email:string

    @Exclude()
    password:string

    @ApiProperty({
        description: 'Número de documento del usuario',
        example: '1234567',
    })
    @Expose()
    document:string

    @ApiProperty({
        description: 'Fecha de creación del usuario',
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
