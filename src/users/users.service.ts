import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from 'src/dtos/create-user.dto';

@Injectable()
export class UsersService {

  constructor(private usersRepository: UsersRepository) { }

  getUsers() {
    return this.usersRepository.getUsers();
  }

  createUser(user: CreateUserDTO) {
    return this.usersRepository.createUser(user);
  }

}
