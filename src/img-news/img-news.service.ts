import { Injectable } from '@nestjs/common';
import { CreateImgNewDto } from './dto/create-img-new.dto';
import { UpdateImgNewDto } from './dto/update-img-new.dto';

@Injectable()
export class ImgNewsService {
  create(createImgNewDto: CreateImgNewDto) {
    return 'This action adds a new imgNew';
  }

  findAll() {
    return `This action returns all imgNews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imgNew`;
  }

  update(id: number, updateImgNewDto: UpdateImgNewDto) {
    return `This action updates a #${id} imgNew`;
  }

  remove(id: number) {
    return `This action removes a #${id} imgNew`;
  }
}
