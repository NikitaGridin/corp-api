import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService, private jwtService: JwtService){}

    async validateUser(name: string, password: string): Promise<any>{
        const user = await this.userService.findByName(name)

        if(user && user.password === password){
            const {password, ...result} = user;
            return result;
        }

        return null;
    } 

    async login(user: any) {
        return {
          token: this.jwtService.sign({ id: user.id }),
        };
      }
}
