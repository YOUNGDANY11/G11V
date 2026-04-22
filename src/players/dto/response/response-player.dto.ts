import { Expose, Transform } from "class-transformer"

export class ResponsePlayerDto {

    @Expose()
    id_player:number

    @Expose()
    id_user:number

    @Expose()
    birth_date:Date

    @Expose()
    nationality:string

    @Expose()
    foot:string

    @Expose()
    hand:string

    @Expose()
    main_position:string

    @Expose()
    discipline:string

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
