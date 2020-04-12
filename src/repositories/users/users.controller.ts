import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './Users.entity';

@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser(): Promise<Users[]> {
    return this.userService.findAll();
  }
}
