import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from '../database/typeorm/config/typeorm.config';
import { StaffAuthModule } from './staff-auth.module';

@Module({
    providers: [],
    controllers: [],
    imports: [StaffAuthModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
})
export class InfrastructureModule {}
