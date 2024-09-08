import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateStaffDto } from 'src/shared/dtos/staff/create-staff.dto';
import { StaffService } from '../staff/staff.service';

export class StaffAuthService {
    constructor(
        @Inject(StaffService) private readonly staffService: StaffService,
    ) {}

    async registration(createStaffDto: CreateStaffDto) {
        const candidate = await this.staffService.findStaffByLogin(
            createStaffDto.login,
        );

        if (candidate) {
            throw new HttpException(
                'Сотрудник с таким логином существует',
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashPassword = await bcrypt.hash(createStaffDto.password, 5);

        const staff = await this.staffService.createStaff({
            ...createStaffDto,
            password: hashPassword,
        });

        if (!staff) {
            throw new HttpException(
                'Ошибка создания сотрудника',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

        return staff;
    }
}
