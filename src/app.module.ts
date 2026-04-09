import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PersonalInformationsModule } from './personal_informations/personal_informations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      url:'postgresql://postgres:BIJMLmiUslXGDZnQHyRdnrxuPYcKaXeA@centerbeam.proxy.rlwy.net:34146/railway',
      autoLoadEntities:true,
      synchronize:true
    })
    ,RolesModule, UsersModule, PersonalInformationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
