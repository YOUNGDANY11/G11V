import { Type } from "class-transformer";
import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateMedicalRecordDto {
    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del medico'})
    id_doctor:number

    @IsInt()
    @IsNotEmpty({message:'Es requerido el id del deportista'})
    id_player:number

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty({message:'Es requerida la fecha'})
    date:Date

    @IsNumber()
    @IsNotEmpty({message:'Es requerida la estatura'})
    heigth:number

    @IsNumber()
    @IsNotEmpty({message:'Es requerida el peso'})
    weigth:number

    @IsNumber({maxDecimalPlaces:2})
    @IsNotEmpty({message:'Es requerido el porcentaje de grasa corporal'})
    fat_percentage:number
    
    @IsNumber({maxDecimalPlaces:2})
    @IsNotEmpty({message:'Es requerido el porcentaje de grasa corporal'})
    muscle_mass:number
}
