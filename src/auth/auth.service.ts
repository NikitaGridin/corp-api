import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor (private readonly userService: UserService){}
        
async validateUser(name:string, password: string){
    const user = await this.userService.findByName(name)

    if(!user){
        throw new UnauthorizedException('Invalid credentials')
    }

    if(user.password != password){
        throw new UnauthorizedException('Invalid credentials')
    }

    if(user && password){
        return {
            userId: user.id,
            name: user.name,
            role: user.role.name
        }
    }

    return null
}
}
