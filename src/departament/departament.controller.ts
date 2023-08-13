import { Controller, Get, Param } from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('departament')
@ApiTags('departament')
export class DepartamentController {
  constructor(private readonly departamentService: DepartamentService) {}

  @Get()
  findAll() {
    return this.departamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentService.findOne(+id);
  }
}
