import { IStaffRepository } from '../../../../domain/entities/staff/istaff.repository';
import { StaffEntity } from '../../../../domain/entities/staff/staff.entity';
import { Repository } from 'typeorm';
import { StaffTypeormEntity } from '../entities/staff.typeorm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Nullable } from '../../../../domain/common/common.types';
import { StaffMapper } from '../mappers/staff.mapper';
import { RestaurantMapper } from '../mappers/restaurant.mapper';
import { StaffPositionMapper } from '../mappers/staff-position.mapper';
import { StaffRoleMapper } from '../mappers/staff-role.mapper';

export class StaffRepository extends IStaffRepository {
    constructor(
        @InjectRepository(StaffTypeormEntity)
        readonly typeorm: Repository<StaffTypeormEntity>,
    ) {
        super();
    }

    async createStaff(staff: StaffEntity): Promise<void> {
        const staffOrmEntity = this.typeorm.create({
            login: staff.login,
            password: staff.password,
            firstName: staff.firstName,
            lastName: staff.lastName,
            patronymic: staff.patronymic,
            info: staff.info,
            phone_number: staff.phoneNumber.phoneNumberWithSeven,
        });
        staffOrmEntity.restaurant = RestaurantMapper.toOrm(staff.restaurant);
        staffOrmEntity.position = StaffPositionMapper.toOrm(
            staff.staffPosition,
        );
        staffOrmEntity.role = StaffRoleMapper.toOrm(staff.role);
        console.log(staffOrmEntity);

        await this.typeorm.save(staffOrmEntity);
    }

    async findStaffByLogin(login: string): Promise<Nullable<StaffEntity>> {
        const ormEntity = await this.typeorm.findOne({
            where: { login: login },
            relations: ['restaurant'],
        });

        console.log(ormEntity);

        return ormEntity ? StaffMapper.toDomain(ormEntity) : null;
    }
}
