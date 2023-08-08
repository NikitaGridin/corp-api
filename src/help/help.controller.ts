import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpService } from './help.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('help')
@ApiTags('help')
export class HelpController {
  constructor(private readonly helpService: HelpService) {}

  @Get()
  findAll() {
    return this.helpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpService.findOne(+id);
  }
}
