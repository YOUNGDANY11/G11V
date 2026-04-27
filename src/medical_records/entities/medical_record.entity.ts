import { Doctor } from "src/doctors/entities/doctor.entity";
import { Player } from "src/players/entities/player.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('medical_records')
export class MedicalRecord {
    @PrimaryGeneratedColumn()
    id_medical_record:number

    @Column({nullable:false})
    id_doctor:number

    @ManyToOne(() => Doctor, (doctor) => doctor.medicalRecord, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'id_doctor'})
    doctor:Doctor


    @Column({nullable:false})
    id_player:number

    @ManyToOne(() => Player, (player) => player.medicalRecord, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'id_player'})
    player:Player

    @Column({nullable:false})
    date:Date

    @Column({nullable:false})
    heigth:number

    @Column({nullable:false, type:'decimal', precision:10, scale:2, default:0})
    weigth:number

    @Column({nullable:false, type:'decimal', precision:10, scale:2, default:0})
    fat_percentage:number

    @Column({nullable:false, type:'decimal', precision:10, scale:2, default:0})
    muscle_mass:number

    @CreateDateColumn({type:'timestamptz'})
    created_at:Date

    @UpdateDateColumn({type:'timestamptz'})
    updated_at:Date

}
