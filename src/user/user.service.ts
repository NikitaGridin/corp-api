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

  async findAll(): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role')
      .getMany();
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.role', 'role') // Load the related role
    .where('user.id = :id', { id })
    .getOne();

    return user;
  }  

  async findByName(name: string): Promise<User | undefined> {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role') // Load the related role
      .where('user.name = :name', { name })
      .getOne();
  }
}
