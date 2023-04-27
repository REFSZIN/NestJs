import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';

@Injectable()
export class UsersRepository {

  private users = [];

  constructor() {
    this.users.push({ name: "didi", email: "didi@gmail.com", password: "123aB!c" });
    this.users.push({ name: "let", email: "let@gmail.com", password: "Re@cT_ru1eZ" });
    this.users.push({ name: "thicode", email: "thicode@gmail.com", password: "bacK_3nD" });
    this.users.push({ name: "mrpink", email: "mrpink@gmail.com", password: "Cs$+HtML1" });
  }

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDTO) {
    return this.users.push(user);
  }

}
