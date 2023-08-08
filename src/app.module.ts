import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfiguration } from './config/database/type-orm-configuration';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    AnimalModule,
    TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
