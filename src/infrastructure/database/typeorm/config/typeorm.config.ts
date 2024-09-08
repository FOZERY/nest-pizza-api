import { ConfigModule, ConfigService } from '@nestjs/config';
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (
        configService: ConfigService,
    ): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [
            'dist/infrastructure/database/typeorm/entities/**/*.typeorm-entity.js',
        ],
        migrations: [
            'dist/infrastructure/database/typeorm/migrations/*{.ts,.js}',
        ],
        logging: true,
        migrationsRun: true,
        synchronize: false,
    }),
};
