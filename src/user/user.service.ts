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

  findAll() {
    return this.userRepository.find(
      {
        relations: ['inventories','workPositions','departament', 'departament.filial', 'news']
      }
    );
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }
}
