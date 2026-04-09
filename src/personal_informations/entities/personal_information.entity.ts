import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('personal_informations')
export class PersonalInformation {
    @PrimaryGeneratedColumn()
    id_per_inf:number

    @Column({nullable:false, unique:true})
    id_user:number

    @OneToOne(() => User, {onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name:'id_user'})
    user: User

    @Column({nullable:false,length:100})
    country:string

    @Column({nullable:false,length:100})
    deparment:string

    @Column({nullable:false,length:100})
    city:string

    @Column({nullable:false,length:100})
    address:string

    @Column({nullable:false})
    brothers:number

    @Column({nullable:false})
    father:boolean

    @Column({nullable:false})
    mother:boolean

    @CreateDateColumn({type:'timestamptz'})
    created_at:Date

    @UpdateDateColumn({type:'timestamptz'})
    updated_at:Date
}
