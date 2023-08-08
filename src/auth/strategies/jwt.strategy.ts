import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findByName(payload.name)

    if(!user){
        throw new UnauthorizedException('У вас нет доступа!')
    }

    return{
        id: user.id
    }
}
}