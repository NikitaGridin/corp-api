import { Injectable } from '@nestjs/common';
import { CreateUserInventoryDto } from './dto/create-user_inventory.dto';
import { UpdateUserInventoryDto } from './dto/update-user_inventory.dto';

@Injectable()
export class UserInventoryService {
  create(createUserInventoryDto: CreateUserInventoryDto) {
    return 'This action adds a new userInventory';
  }

  findAll() {
    return `This action returns all userInventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userInventory`;
  }

  update(id: number, updateUserInventoryDto: UpdateUserInventoryDto) {
    return `This action updates a #${id} userInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} userInventory`;
  }
}
