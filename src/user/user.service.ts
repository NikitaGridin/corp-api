import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findById(id: string): Promise<User | undefined> {
    const user = this.userRepository.findOneBy({
      id,
    })

    return user
  }

  async findByName(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneBy({
      name: username,
    })

    return user
  }
}
