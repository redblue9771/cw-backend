import { Injectable } from '@nestjs/common';
import { UsersService } from '../repositories/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pwd: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) return null;

    const match = await compare(pwd, user.password);
    if (match) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  };

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
};
