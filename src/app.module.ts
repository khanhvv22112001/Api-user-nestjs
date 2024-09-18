import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user.entity';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '123456789k',
        database: 'nestjs_api_mysql',
        entities: [User],
        synchronize: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
