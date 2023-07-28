import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entities';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './entity/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDTO) {
    const create = this.userRepo.create(dto);
    console.log(dto);
    return await this.userRepo.save(create);
  }
}
