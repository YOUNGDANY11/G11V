import { Exclude, Expose, Transform } from "class-transformer"

export class ResponseUserDto {

    @Expose()
    id_user:number

    @Expose()
    id_role:number

    @Expose()
    @Transform(({obj}) => obj.role?.name)
    role_name:string

    @Expose()
    @Transform(({obj}) => obj.role?.code)
    role_code:string

    @Expose()
    name:string

    @Expose()
    lastname:string

    @Expose()
    email:string

    @Exclude()
    password:string

    @Expose()
    document:string

    @Expose()
    created_at:Date

    @Expose()
    updated_at:Date


}
