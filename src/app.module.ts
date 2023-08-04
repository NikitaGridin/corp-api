import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { User } from './user/entities/user.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { InventoryModule } from './inventory/inventory.module'
import { Inventory } from './inventory/entities/inventory.entity'
import { UserInventoryModule } from './user_inventory/user_inventory.module'
import { UserInventory } from './user_inventory/entities/user_inventory.entity'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [User, Inventory, UserInventory],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    InventoryModule,
    UserInventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
