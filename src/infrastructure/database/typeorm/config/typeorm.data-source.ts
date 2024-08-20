import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

// Загружаем переменные окружения из файла .env
// config({
//     path: resolve(__dirname, `../../../../env/.${process.env.NODE_ENV}.env`),
// });

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get<string>('POSTGRES_HOST'),
    port: configService.get<number>('POSTGRES_PORT'),
    username: configService.get<string>('POSTGRES_USERNAME'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    database: configService.get<string>('POSTGRES_DB'),
    entities: [
        'dist/infrastructure/database/typeorm/entities/*.typeorm-entity.js',
    ],
    migrations: ['dist/infrastructure/database/typeorm/migrations/*.js'],
    logging: true,
    migrationsRun: false,
    synchronize: false,
});
