import { Injectable, NotFoundException } from '@nestjs/common';
import { IStaffRepository } from '../../../domain/entities/staff/istaff.repository';
import { IRestaurantRepository } from '../../../domain/entities/restaurant/irestaurant.repository';
import { IStaffPositionRepository } from '../../../domain/entities/staff-position/istaff-position.repository';
import { IStaffRoleRepository } from '../../../domain/entities/staff-role/istaff-role.repository';
import { CreateStaffDto } from '../../../shared/dtos/staff/create-staff.dto';
import { Nullable } from '../../../domain/common/common.types';
import { RestaurantEntity } from '../../../domain/entities/restaurant/restaurant.entity';
import { StaffPositionEntity } from '../../../domain/entities/staff-position/staff-position.entity';
import { StaffRoleEntity } from '../../../domain/entities/staff-role/staff-role.entity';
import { PhoneNumberVo } from '../../../domain/value-objects/phone-number.vo';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@Injectable()
export class StaffService {
    constructor(
        private readonly staffRepository: IStaffRepository,
        private readonly restaurantRepository: IRestaurantRepository,
        private readonly staffPositionRepository: IStaffPositionRepository,
        private readonly staffRoleRepository: IStaffRoleRepository,
    ) {}

    async createStaff(createStaffDto: CreateStaffDto) {
        const restaurant: Nullable<RestaurantEntity> =
            await this.restaurantRepository.findOneById(
                createStaffDto.restaurant_id,
            );

        if (!restaurant) {
            throw new NotFoundException('Ресторан не найден.');
        }

        const staffPosition: Nullable<StaffPositionEntity> =
            await this.staffPositionRepository.findByValue(
                createStaffDto.staff_position,
            );

        if (!staffPosition) {
            throw new NotFoundException(
                'Такой позиции для назначения сотруднику не существует.',
            );
        }

        const staffRole: Nullable<StaffRoleEntity> =
            await this.staffRoleRepository.findByValue(
                createStaffDto.staff_role,
            );

        if (!staffRole) {
            throw new NotFoundException(
                'Такой роли для назначения сотруднику не существует.',
            );
        }

        const phoneNumber = new PhoneNumberVo(createStaffDto.phoneNumber);

        const staff: StaffEntity = new StaffEntity(
            createStaffDto.login,
            createStaffDto.password,
            createStaffDto.firstName,
            createStaffDto.lastName,
            createStaffDto.patronymic,
            phoneNumber,
            restaurant,
            staffPosition,
            staffRole,
            createStaffDto.info,
        );

        await this.staffRepository.createStaff(staff);

        return staff;
    }

    async findStaffByLogin(login: string) {
        return await this.staffRepository.findStaffByLogin(login);
    }
}
