import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { ConfigModule } from '@nestjs/config';
import { User } from 'src/helpers/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // ClientsModule.register([
    //   {
    //     name: 'UserService',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: 'localhost:5005',
    //       package: 'user',
    //       protoPath: resolve(__dirname, '../../src/helpers/proto/user.proto'),
    //     },
    //   },
    // ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
