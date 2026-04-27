import { Expose, Transform } from "class-transformer"
import { ResponseDoctorDto } from "src/doctors/dto"

export class ResponseMedicalRecod{
    @Expose()
    id_medical_record: number

    @Expose()
    id_doctor: number

    @Expose()
    id_player: number

    @Expose()
    date: Date

    @Expose()
    heigth: number

    @Expose()
    weigth: number

    @Expose()
    fat_percentage: number
    
    @Expose()
    muscle_mass: number 

    @Expose()
    @Transform(({obj}) => obj.doctor?.user?.name)
    doctor_name: string

    @Expose()
    @Transform(({obj}) => obj.doctor?.user?.lastname)
    doctor_lastname: string

    @Expose()
    @Transform(({obj}) => obj.player?.user?.name)
    player_name: string

    @Expose()
    @Transform(({obj}) => obj.player?.user?.lastname)
    player_lastname: string

    @Expose()
    created_at:Date

    @Expose()
    updated_at:Date
}