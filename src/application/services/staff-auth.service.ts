import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStaffDto } from '../../shared/dtos/staff/create-staff.dto';
import { StaffService } from './staff/staff.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StaffAuthService {
    constructor(private readonly staffService: StaffService) {}

    async registration(createStaffDto: CreateStaffDto) {
        const candidate = await this.staffService.findStaffByLogin(
            createStaffDto.login,
        );

        if (candidate) {
            throw new HttpException(
                'Работник с таким логином уже существует.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashPassword = await bcrypt.hash(createStaffDto.password, 5);

        const staff = await this.staffService.createStaff({
            ...createStaffDto,
            password: hashPassword,
        });

        return staff;
    }
}
