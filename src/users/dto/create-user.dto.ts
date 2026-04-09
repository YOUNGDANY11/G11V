import { IsInt, IsNotEmpty, IsString, Length, MinLength } from "class-validator";

export class CreateUserDto {
    @IsInt()
    @IsNotEmpty({message:'Es requerido el rol'})
    id_role:number

    @IsString()
    @IsNotEmpty({message:'Es requerido el nombre'})
    @Length(2,100,{message:'El nombre minimo debeneter 2 caracteres y maximo 100'})
    name:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el apellido'})
    @Length(2,100,{message:'El apellido minimo debeneter 2 caracteres y maximo 100'})
    lastname:string

    @IsString()
    @IsNotEmpty({message:'Es requerido el correo'})
    @Length(10,100,{message:'El correo minimo debeneter 10 caracteres y maximo 100'})
    email:string

    @IsString()
    @IsNotEmpty({message:'La contraseña es requerida'})
    @MinLength(6,{message:'La contraseña debe tener al menos 6 caracteres'})
    password:string

    @IsString()
    @IsNotEmpty({message:'La contraseña es requerida'})
    @Length(7,10,{message:'El numero de documento debe ser valido'})
    document:string
}
