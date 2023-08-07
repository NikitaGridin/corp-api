import { PartialType } from '@nestjs/swagger';
import { CreateShortcodeDto } from './create-shortcode.dto';

export class UpdateShortcodeDto extends PartialType(CreateShortcodeDto) {}
