import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      url:'postgresql://postgres:BIJMLmiUslXGDZnQHyRdnrxuPYcKaXeA@centerbeam.proxy.rlwy.net:34146/railway',
      autoLoadEntities:true,
      synchronize:true
    })
    ,RolesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
