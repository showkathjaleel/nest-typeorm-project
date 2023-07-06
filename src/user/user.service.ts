import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/helpers/entity/user.entity';
import { Repository } from 'typeorm';
import {
  UserRegisterRequest,
  UserRegisterResponse,
} from 'src/helpers/interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

   createUser(
    userRegisterRequest: UserRegisterRequest,
  ): Promise<UserRegisterRequest> {
    return this.userRepository.save(userRegisterRequest);
  }
}
