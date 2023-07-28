import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './entity/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() dto: CreateUserDTO) {
    return this.authService.create(dto);
  }
}
