import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.usersService.createUser(body);
  }
}
