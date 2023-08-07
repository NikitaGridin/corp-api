import { Injectable } from '@nestjs/common';
import { CreateWorkPositionDto } from './dto/create-work-position.dto';
import { UpdateWorkPositionDto } from './dto/update-work-position.dto';

@Injectable()
export class WorkPositionService {
  create(createWorkPositionDto: CreateWorkPositionDto) {
    return 'This action adds a new workPosition';
  }

  findAll() {
    return `This action returns all workPosition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workPosition`;
  }

  update(id: number, updateWorkPositionDto: UpdateWorkPositionDto) {
    return `This action updates a #${id} workPosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} workPosition`;
  }
}
