import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id_user:number

    @Column({nullable:false})
    id_role:number

    @ManyToOne(()=> Role)
    @JoinColumn({name:'id_role'})
    role:Role

    @Column({nullable:false, length:100})
    name:string

    @Column({nullable:false,length:100})
    lastname:string

    @Column({nullable:false,unique:true,length:100})
    email:string

    @Column({nullable:false,length:255})
    password:string

    @Column({nullable:false,unique:true,length:10})
    document:string

    @CreateDateColumn({type:'timestamptz'})
    created_at:Date

    @UpdateDateColumn({type:'timestamptz'})
    updated_at:Date
}
