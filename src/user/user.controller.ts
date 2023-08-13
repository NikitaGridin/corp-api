import { Controller, Get,Post,Request, SetMetadata, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  @UseGuards(RolesGuard)
  @SetMetadata('roles', 'admin')
    getAll(){
    return this.userService.findAll()
  }  

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req){
    return {user: req.user, msg: 'Logged in'}
  }  

  @Get('login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req){
    return req.user
  }  

  @Get('logout')
  // @UseGuards(AuthenticatedGuard)
  logout(@Request() req){
    req.session.destroy()
    return {msg: 'Session ended'}

  }  
}
