import { Module } from '@nestjs/common';
import { PersonalInformationsService } from './personal_informations.service';
import { PersonalInformationsController } from './personal_informations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalInformation } from './entities/personal_information.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([PersonalInformation]),
    UsersModule
  ],
  controllers: [PersonalInformationsController],
  providers: [PersonalInformationsService],
})
export class PersonalInformationsModule {}
