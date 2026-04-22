import { Expose, Transform } from "class-transformer"

export class ResponseDoctorDto {
    @Expose()
    id_doctor:number

    @Expose()
    id_user:number

    @Expose()
    birth_date:Date

    @Expose()
    nationality:string

    @Expose()
    profession:string

    @Expose()
    job_title:string

    @Expose()
    description:string

    @Expose()
    status:string

    @Expose()
    @Transform(({obj})=> obj.user?.name)
    user_name:string

    @Expose()
    @Transform(({obj})=> obj.user?.lastname)
    user_lastname:string

    @Expose()
    @Transform(({obj})=> obj.user?.document)
    user_document:string
}
