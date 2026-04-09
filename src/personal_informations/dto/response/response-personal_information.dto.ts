import { Expose, Transform } from "class-transformer"

export class ResponsePersonalInformationDto{

    @Expose()
    id_per_inf:number

    @Expose()
    id_user:number

    @Expose()
    @Transform(({obj})=> obj.user?.name)
    user_name:string

    @Expose()
    @Transform(({obj}) => obj.user?.lastname)
    user_lastname:string

    @Expose()
    country:string

    @Expose()
    deparment:string

    @Expose()
    city:string

    @Expose()
    address:string

    @Expose()
    brothers:number

    @Expose()
    father:boolean

    @Expose()
    mother:boolean

    @Expose()
    created_at:Date

    @Expose()
    updated_at:Date
}