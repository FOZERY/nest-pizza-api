import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffService } from 'src/application/services/staff/staff.service';
import { StaffController } from '../controllers/staff/staff.controller';
import { StaffRepository } from '../database/typeorm/entities/staff/staff.repository';
import { StaffTypeormEntity } from '../database/typeorm/entities/staff/staff.typeorm-entity';

@Module({
    imports: [TypeOrmModule.forFeature([StaffTypeormEntity])],
    providers: [StaffService, StaffRepository],
    controllers: [StaffController],
    exports: [StaffService, StaffRepository],
})
export class StaffModule {}
