import { Module } from '@nestjs/common';
import { ImgNewsService } from './img-news.service';
import { ImgNewsController } from './img-news.controller';

@Module({
  controllers: [ImgNewsController],
  providers: [ImgNewsService]
})
export class ImgNewsModule {}
