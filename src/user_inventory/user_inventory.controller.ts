import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserInventoryService } from './user_inventory.service';
import { CreateUserInventoryDto } from './dto/create-user_inventory.dto';
import { UpdateUserInventoryDto } from './dto/update-user_inventory.dto';

@Controller('user-inventory')
export class UserInventoryController {
  constructor(private readonly userInventoryService: UserInventoryService) {}

  @Post()
  create(@Body() createUserInventoryDto: CreateUserInventoryDto) {
    return this.userInventoryService.create(createUserInventoryDto);
  }

  @Get()
  findAll() {
    return this.userInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInventoryDto: UpdateUserInventoryDto) {
    return this.userInventoryService.update(+id, updateUserInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInventoryService.remove(+id);
  }
}
