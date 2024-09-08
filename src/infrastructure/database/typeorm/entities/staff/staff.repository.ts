import { InjectRepository } from '@nestjs/typeorm';
import { IStaffRepository } from 'src/domain/entities/staff/istaff.repository';
import { StaffEntity } from 'src/domain/entities/staff/staff.entity';
import { CreateStaffDto } from 'src/shared/dtos/staff/create-staff.dto';
import { Repository } from 'typeorm';
import { StaffTypeormMapper } from './mapper/staff-typeorm.mapper';
import { StaffTypeormEntity } from './staff.typeorm-entity';

export class StaffRepository implements IStaffRepository {
    constructor(
        @InjectRepository(StaffTypeormEntity)
        private readonly ormRepository: Repository<StaffTypeormEntity>,
    ) {}

    async findStaffByLogin(login: string): Promise<StaffEntity | null> {
        try {
            const ormEntity = await this.ormRepository.findOne({
                where: {
                    login: login,
                },
                relations: {
                    role: true,
                    position: true,
                },
            });

            if (!ormEntity) {
                return null;
            }

            return StaffTypeormMapper.toDomain(ormEntity);
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    async createStaff(createStaffDto: CreateStaffDto) {
        try {
            const staff = new StaffEntity(
                createStaffDto.login,
                createStaffDto.password,
                createStaffDto.firstName,
                createStaffDto.lastName,
                createStaffDto.phoneNumber,
                createStaffDto.restaurantId,
                createStaffDto.staffPositionId,
                createStaffDto.roleId,
                createStaffDto.patronymic,
                createStaffDto.info,
            );

            const staffOrm = StaffTypeormMapper.toOrm(staff);

            const createdStaffOrm = await this.ormRepository.save(staffOrm);
            return StaffTypeormMapper.toDomain(createdStaffOrm);
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
