import { IsInt, IsNotEmpty, IsString, Length, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'ID del rol asociado al usuario',
        example: 1,
    })
    @IsInt()
    @IsNotEmpty({message:'Es requerido el rol'})
    id_role:number

    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el nombre'})
    @Length(2,100,{message:'El nombre minimo debeneter 2 caracteres y maximo 100'})
    name:string

    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Pérez',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el apellido'})
    @Length(2,100,{message:'El apellido minimo debeneter 2 caracteres y maximo 100'})
    lastname:string

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan@example.com',
        minLength: 10,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty({message:'Es requerido el correo'})
    @Length(10,100,{message:'El correo minimo debeneter 10 caracteres y maximo 100'})
    email:string

    @ApiProperty({
        description: 'Contraseña del usuario (mínimo 6 caracteres)',
        example: 'Password123',
        minLength: 6,
    })
    @IsString()
    @IsNotEmpty({message:'La contraseña es requerida'})
    @MinLength(6,{message:'La contraseña debe tener al menos 6 caracteres'})
    password:string

    @ApiProperty({
        description: 'Número de documento del usuario (7-10 caracteres)',
        example: '1234567',
        minLength: 7,
        maxLength: 10,
    })
    @IsString()
    @IsNotEmpty({message:'La contraseña es requerida'})
    @Length(7,10,{message:'El numero de documento debe ser valido'})
    document:string
}
