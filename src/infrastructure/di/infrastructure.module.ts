import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from '../database/typeorm/config/typeorm.config';

@Module({
    providers: [],
    controllers: [],
    imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
})
export class InfrastructureModule {}
