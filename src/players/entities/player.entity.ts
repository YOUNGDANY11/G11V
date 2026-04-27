import { MedicalRecord } from "src/medical_records/entities/medical_record.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn()
    id_player:number

    @Column({nullable:false})
    id_user:number

    @OneToOne(() => User, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'id_user'})
    user:User

    @Column({nullable:false})
    birth_date:Date

    @Column({nullable:false,length:100})
    nationality:string

    @Column({nullable:false, length:10})
    foot:string

    @Column({nullable:false,length:10})
    hand:string

    @Column({nullable:false,length:50})
    main_position:string

    @Column({nullable:false, length:100})
    discipline:string

    @Column({nullable:false, length:10})
    status:string

    @CreateDateColumn({type:'timestamptz'})
    created_at:Date

    @UpdateDateColumn({type:'timestamptz'})
    updated_at:Date

    @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.player)
    medicalRecord:MedicalRecord[]

}
