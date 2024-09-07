import { IStaffPositionRepository } from '../../../../domain/entities/staff-position/istaff-position.repository';
import { StaffPositionEntity } from '../../../../domain/entities/staff-position/staff-position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StaffPositionTypeormEntity } from '../entities/staff-position.typeorm-entity';
import { Repository } from 'typeorm';
import { StaffPositionMapper } from '../mappers/staff-position.mapper';
import { Nullable } from '../../../../domain/common/common.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffPositionRepository extends IStaffPositionRepository {
    constructor(
        @InjectRepository(StaffPositionTypeormEntity)
        private readonly typeorm: Repository<StaffPositionTypeormEntity>,
    ) {
        super();
    }

    async findByValue(value: string): Promise<Nullable<StaffPositionEntity>> {
        const ormEntity: Nullable<StaffPositionTypeormEntity> =
            await this.typeorm.findOne({
                where: {
                    value: value,
                },
            });

        return ormEntity ? StaffPositionMapper.toDomain(ormEntity) : null;
    }
}
