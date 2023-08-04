import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInventoryDto } from './create-user_inventory.dto';

export class UpdateUserInventoryDto extends PartialType(CreateUserInventoryDto) {}
