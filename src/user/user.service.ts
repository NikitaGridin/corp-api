import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async findByName(name: string) {
    return this.userRepository.findOneBy({ name });
  }
}
