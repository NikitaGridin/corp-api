import { Module } from '@nestjs/common';
import { WorkPositionService } from './work-position.service';
import { WorkPositionController } from './work-position.controller';

@Module({
  controllers: [WorkPositionController],
  providers: [WorkPositionService]
})
export class WorkPositionModule {}
