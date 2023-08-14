import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImgNewsService } from './img-news.service';
import { CreateImgNewDto } from './dto/create-img-new.dto';
import { UpdateImgNewDto } from './dto/update-img-new.dto';

@Controller('img-news')
export class ImgNewsController {
  constructor(private readonly imgNewsService: ImgNewsService) {}

  @Post()
  create(@Body() createImgNewDto: CreateImgNewDto) {
    return this.imgNewsService.create(createImgNewDto);
  }

  @Get()
  findAll() {
    return this.imgNewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imgNewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImgNewDto: UpdateImgNewDto) {
    return this.imgNewsService.update(+id, updateImgNewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imgNewsService.remove(+id);
  }
}
