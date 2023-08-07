import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkPositionDto } from './create-work-position.dto';

export class UpdateWorkPositionDto extends PartialType(CreateWorkPositionDto) {}
