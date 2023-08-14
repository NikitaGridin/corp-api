import { PartialType } from '@nestjs/swagger';
import { CreateImgNewDto } from './create-img-new.dto';

export class UpdateImgNewDto extends PartialType(CreateImgNewDto) {}
