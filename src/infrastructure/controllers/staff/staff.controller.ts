import { Controller, Get, Query } from '@nestjs/common';
import { StaffService } from 'src/application/services/staff/staff.service';

@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) {}

    @Get()
    async findStaff(@Query('login') login: string) {
        return await this.staffService.findStaffByLogin(login);
    }
}
