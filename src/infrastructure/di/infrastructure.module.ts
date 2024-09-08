import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from '../database/typeorm/config/typeorm.config';

@Module({
    imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
    providers: [],
    controllers: [],
})
export class InfrastructureModule {}
