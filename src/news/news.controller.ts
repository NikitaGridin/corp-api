import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/auth.guard';

@Controller('news')
@ApiTags('news')
@ApiBearerAuth()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('setLike')
  @UseGuards(AuthenticatedGuard)
  create(@Request() req, @Body() newsId: any) {
    return this.newsService.create(req.user.userId,newsId.newsId);
  }
  @Post('removeLike')
  @UseGuards(AuthenticatedGuard)
  removeLike(@Request() req, @Body() newsId: any) {
    return this.newsService.removeLike(req.user.userId,newsId.newsId);
  }

  @Get()
  @UseGuards(AuthenticatedGuard)
  findAll(@Request() req) {
    return this.newsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
