import { Inject, Injectable } from '@nestjs/common';
import { Nullable } from 'src/domain/common/common.types';
import { IStaffRepository } from 'src/domain/entities/staff/istaff.repository';
import { StaffEntity } from 'src/domain/entities/staff/staff.entity';
import { StaffRepository } from 'src/infrastructure/database/typeorm/entities/staff/staff.repository';
import { CreateStaffDto } from 'src/shared/dtos/staff/create-staff.dto';

@Injectable()
export class StaffService {
    constructor(
        @Inject(StaffRepository)
        private readonly staffRepository: IStaffRepository,
    ) {}

    async findStaffByLogin(login: string): Promise<Nullable<StaffEntity>> {
        return this.staffRepository.findStaffByLogin(login);
    }

    async createStaff(createStaffDto: CreateStaffDto) {
        return await this.staffRepository.createStaff(createStaffDto);
    }
}
