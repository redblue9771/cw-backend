import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './repositories/users/users.controller';
import { UsersModule } from './repositories/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1q2w3e',
      database: 'postgres',
      schema: 'sandbox',
      entities: [
        `${__dirname}/repositories/**/*.entity{.ts,.js}`
      ],
      synchronize: false,
    }),
    UsersModule,
  ],
  // controllers: [AppController, UsersController],
  // providers: [AppService],
})
export class AppModule {}
