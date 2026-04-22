import { Expose } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class ResponseRoleDto {

    @ApiProperty({
        description: 'ID único del rol',
        example: 1,
    })
    @Expose()
    id_role:number

    @ApiProperty({
        description: 'Nombre del rol',
        example: 'Administrador',
    })
    @Expose()
    name:string

    @ApiProperty({
        description: 'Código único del rol',
        example: 'ADMIN',
    })
    @Expose()
    code:string
}
