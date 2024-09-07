import { IStaffRoleRepository } from '../../../../domain/entities/staff-role/istaff-role.repository';
import { Repository } from 'typeorm';
import { StaffRoleTypeormEntity } from '../entities/staff-role.typeorm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Nullable } from '../../../../domain/common/common.types';
import { StaffRoleEntity } from '../../../../domain/entities/staff-role/staff-role.entity';
import { StaffRoleMapper } from '../mappers/staff-role.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffRoleRepository extends IStaffRoleRepository {
    constructor(
        @InjectRepository(StaffRoleTypeormEntity)
        readonly typeorm: Repository<StaffRoleTypeormEntity>,
    ) {
        super();
    }

    async findByValue(value: string): Promise<Nullable<StaffRoleEntity>> {
        const ormEntity = await this.typeorm.findOne({ where: { value } });

        return ormEntity ? StaffRoleMapper.toDomain(ormEntity) : null;
    }
}
