import {
  Controller,
  Inject,
  OnModuleInit,
  Get,
  Body,
  Post,
} from '@nestjs/common';

import {
  UserRegisterResponse,
  UserRegisterRequest,
} from 'src/helpers/interface/user.interface';
import { Observable } from 'rxjs';
import { UserServiceClient } from 'src/helpers/interface/user.interface';
import { UserService } from './user.service';
import { User } from 'src/helpers/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  createUser(@Body() body: UserRegisterRequest): Promise<UserRegisterRequest> {
    return this.userService.createUser(body);
  }
}

// export class UserController implements OnModuleInit {
//   private svc: UserServiceClient;
//   @Inject(UserService)
//   private userService: UserService;

//   @Inject('UserService')
//   private readonly client: ClientGrpc;

//   public onModuleInit(): void {
//     this.svc = this.client.getService<UserServiceClient>('UserService');
//   }

//   @Get('me')
//   getMe(): string {
//     return 'this is me';
//   }

//   @Get(':id')
//   async getUserById(
//     @Param('id') id: number,
//   ): Promise<Observable<getUserByIdResponse>> {
//     console.log(id, '222222222');
//     return this.svc.getUserById({ id });
//   }

// }
