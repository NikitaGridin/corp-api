import { Controller, Get, Param, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { jwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/auth/decorators/user-id.decorator';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(jwtAuthGuard)
  getMe(@UserId() id: string){
    return this.userService.findById(id)
  }  
}
