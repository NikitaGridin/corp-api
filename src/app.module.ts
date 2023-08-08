import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { InventoryModule } from './inventory/inventory.module'
import { DatabaseConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPositionModule } from './work-position/work-position.module';
import { FilialsModule } from './filials/filials.module';
import { DepartamentModule } from './departament/departament.module';
import { HelpModule } from './help/help.module';
import { ShortcodeModule } from './shortcode/shortcode.module';
import { HolidaysModule } from './holidays/holidays.module';
import { NewsModule } from './news/news.module';
import { InstructionsModule } from './instructions/instructions.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load: [DatabaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database')
      }),
      inject: [ConfigService]
    }),
    UserModule, 
    InventoryModule, WorkPositionModule, FilialsModule, DepartamentModule, HelpModule, ShortcodeModule, HolidaysModule, NewsModule, InstructionsModule, AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
