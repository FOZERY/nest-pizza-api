import { StaffEntity } from 'src/domain/entities/staff/staff.entity';
import { StaffPositionTypeormMapper } from '../../staff-position/mapper/staff-position-typeorm.mapper';
import { StaffRoleTypeormMapper } from '../../staff-role/mapper/staff-role-typeorm.mapper';
import { StaffTypeormEntity } from '../staff.typeorm-entity';

export class StaffTypeormMapper {
    static toDomain(staffOrm: StaffTypeormEntity): StaffEntity {
        const role = StaffRoleTypeormMapper.toDomain(staffOrm.role);
        const position = StaffPositionTypeormMapper.toDomain(staffOrm.position);

        return new StaffEntity(
            staffOrm.login,
            staffOrm.password,
            staffOrm.firstName,
            staffOrm.lastName,
            staffOrm.phone_number,
            staffOrm.restaurant_id,
            position,
            role,

            staffOrm.patronymic,
            staffOrm.info,
            staffOrm.id,
        );
    }
    static toDomains(ormEntity: StaffTypeormEntity[]): StaffEntity[] {
        return ormEntity.map((ormEntity) => this.toDomain(ormEntity));
    }
    static toOrm(domainEntity: StaffEntity): StaffTypeormEntity {
        const ormEntity = new StaffTypeormEntity();

        ormEntity.login = domainEntity.login;
        ormEntity.password = domainEntity.password;
        ormEntity.firstName = domainEntity.firstName;
        ormEntity.lastName = domainEntity.lastName;
        ormEntity.phone_number = domainEntity.phoneNumber;
        ormEntity.restaurant_id = domainEntity.restaurantId;
        ormEntity.staff_position_id = domainEntity.staffPositionId;
        ormEntity.role_id = domainEntity.roleId;

        ormEntity.patronymic = domainEntity.patronymic;
        ormEntity.info = domainEntity.info;
        if (domainEntity.id) {
            ormEntity.id = domainEntity.id;
        }
        return ormEntity;
    }
    static toOrms(domainEntities: StaffEntity[]): StaffTypeormEntity[] {
        return domainEntities.map((domainEntity) => this.toOrm(domainEntity));
    }
}
