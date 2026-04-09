import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id_role:number

    @Column({nullable:false, length:50})
    name:string

    @Column({nullable:false,length:10, unique:true})
    code:string
}
