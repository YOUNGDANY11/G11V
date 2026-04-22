import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('doctors')
export class Doctor {
    @PrimaryGeneratedColumn()
    id_doctor:number

    @Column({nullable:false})
    id_user:number

    @OneToOne(() => User)
    @JoinColumn({name:'id_user'})
    user:User

    @Column({nullable:false})
    birth_date:Date

    @Column({nullable:false,length:100})
    nationality:string

    @Column({nullable:false,length:100})
    profession:string

    @Column({nullable:false,length:100})
    job_title:string

    @Column({nullable:false,length:100})
    description:string

    @Column({nullable:false,length:10})
    status:string

    @CreateDateColumn({type:'timestamptz'})
    created_at:Date

    @UpdateDateColumn({type:'timestamptz'})
    updated_at:Date
}
