import { Module } from '@nestjs/common';
import { UserInventoryService } from './user_inventory.service';
import { UserInventoryController } from './user_inventory.controller';

@Module({
  controllers: [UserInventoryController],
  providers: [UserInventoryService]
})
export class UserInventoryModule {}
