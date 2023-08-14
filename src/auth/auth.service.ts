import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/entities/user.entity'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.usersService.findByName(name)

    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }

    return null
  }

  async login(user: User) {
    return {
      token: this.jwtService.sign({ id: user.id }),
    }
  }
}
