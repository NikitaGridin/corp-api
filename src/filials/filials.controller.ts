import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilialsService } from './filials.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('filials')
@ApiTags('filials')
export class FilialsController {
  constructor(private readonly filialsService: FilialsService) {}

  @Get()
  findAll() {
    return this.filialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filialsService.findOne(+id);
  }
}
