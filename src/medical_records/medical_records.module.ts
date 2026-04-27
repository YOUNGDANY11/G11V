import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical_records.service';
import { MedicalRecordsController } from './medical_records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecord } from './entities/medical_record.entity';
import { UsersModule } from 'src/users/users.module';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([MedicalRecord]),
    DoctorsModule,
    PlayersModule
  ],
  controllers: [MedicalRecordsController],
  providers: [MedicalRecordsService],
})
export class MedicalRecordsModule {}
