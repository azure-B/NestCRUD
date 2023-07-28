import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDTO, findUserDTO, updateUserDTO } from './dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() dto: CreateUserDTO) {
    return this.authService.create(dto);
  }

  @Get('findAll')
  findAll() {
    return this.authService.findMany();
  }

  @Get('findOne')
  findOne(@Query() userId: findUserDTO) {
    return this.authService.findOne(userId);
  }

  @Post('update')
  update(@Body() dto: updateUserDTO) {
    return this.authService.update(dto);
  }
}
