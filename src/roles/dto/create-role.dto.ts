import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({
        description: 'Nombre del rol',
        example: 'Administrador',
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el nombre del rol'})
    name:string

    @ApiProperty({
        description: 'Código único del rol',
        example: 'ADMIN',
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el codigo del rol'})
    code:string
}
