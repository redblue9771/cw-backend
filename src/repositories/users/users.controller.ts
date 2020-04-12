import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUser(): Promise<string> {
    return JSON.stringify(await this.userService.findAll());
  }
}
