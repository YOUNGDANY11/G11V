import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Player]),
    UsersModule
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports:[PlayersService]
})
export class PlayersModule {}
