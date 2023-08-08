import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { localAuthGuard } from './guards/local.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  
  @UseGuards(localAuthGuard)
  @Post('login') 
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) { 
    return this.authService.login(req.user);
  }
} 