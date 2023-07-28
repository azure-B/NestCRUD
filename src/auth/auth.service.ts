import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entities';
import { Repository } from 'typeorm';
import { CreateUserDTO, findUserDTO, updateUserDTO } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDTO) {
    const create = this.userRepo.create(dto);
    return await this.userRepo.save(create);
  }

  findMany() {
    return this.userRepo.find();
  }

  findOne({ userId }: findUserDTO) {
    console.log(userId);
    return this.userRepo.find({ where: { userId } });
  }

  async update(dto: updateUserDTO) {
    const update = await this.userRepo.findOne({
      where: { id: dto.id },
    });

    Object.assign(update, dto);

    await this.userRepo.save(update);
    return update;
  }
}
