import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty({message:'Es requerido el nombre del rol'})
    name:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el codigo del rol'})
    code:string
}
