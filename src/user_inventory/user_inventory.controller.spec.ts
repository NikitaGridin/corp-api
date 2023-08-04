import { Test, TestingModule } from '@nestjs/testing';
import { UserInventoryController } from './user_inventory.controller';
import { UserInventoryService } from './user_inventory.service';

describe('UserInventoryController', () => {
  let controller: UserInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInventoryController],
      providers: [UserInventoryService],
    }).compile();

    controller = module.get<UserInventoryController>(UserInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
