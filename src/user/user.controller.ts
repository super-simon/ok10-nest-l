import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async getUserList() {
    return this.userService.getAllUsers();
  }

  @Post('account/create')
  async createUserAccount(@Req() req: any, @Body() body: UserCreateDto) {
    return this.userService.createUser(body);
  }

  @Delete(':userId')
  async deleteUserAccount() {
    return 'Deleted';
  }

  @Post('account/:userId/animal')
  async addAnimalToUser() {
    return 'New Animal';
  }

  @Patch(':userId')
  async updateUserProfile() {
    return 'Updated';
  }

  @Get(':userId')
  async getUserProfile(@Param('userId') userId: string) {
    return this.userService.getUserById(userId);
  }
}
