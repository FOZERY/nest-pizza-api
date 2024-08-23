import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

dotenv.config({
    path: `./env/.${process.env.NODE_ENV || 'development'}.env`,
});

export default new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        'dist/infrastructure/database/typeorm/entities/*.typeorm-entity.js',
    ],
    migrations: ['dist/infrastructure/database/typeorm/migrations/*.js'],
});
