import { registerAs } from '@nestjs/config'
import { Departament } from 'src/departament/entities/departament.entity'
import { Filial } from 'src/filials/entities/filial.entity'
import { Help } from 'src/help/entities/help.entity'
import { Holidays } from 'src/holidays/entities/holiday.entity'
import { Instruction } from 'src/instructions/entities/instruction.entity'
import { Inventory } from 'src/inventory/entities/inventory.entity'
import { News } from 'src/news/entities/news.entity'
import { Role } from 'src/roles/entities/role.entity'
import { Shortcode } from 'src/shortcode/entities/shortcode.entity'
import { User } from 'src/user/entities/user.entity'
import { WorkPosition } from 'src/work-position/entities/work-position.entity'

export default registerAs('database', ()=>({
    type: 'mysql',
    host: process.env.TYPEORM_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5000, 
    username: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,
    entities: [User,Inventory, WorkPosition, Filial, Departament, Help, Shortcode, Holidays, News, Instruction, Role],
    migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`], 
    synchronize: true
}))  