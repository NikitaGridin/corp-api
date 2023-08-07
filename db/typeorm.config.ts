import { config } from "dotenv";
import { DataSource } from "typeorm";

config();

export default new DataSource ({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/../src/**/*.entity.ts`],
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    synchronize: true
})