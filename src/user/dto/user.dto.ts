import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserCreateDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsEmail()
  email: string;
}
