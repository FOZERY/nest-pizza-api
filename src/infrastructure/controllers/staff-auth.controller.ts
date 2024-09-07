import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateStaffDto } from '../../shared/dtos/staff/create-staff.dto';
import { StaffAuthService } from '../../application/services/staff-auth.service';

@Controller('auth/staff')
export class StaffAuthController {
    constructor(private readonly staffAuthService: StaffAuthService) {}

    @Post('login')
    staffLogin() {}

    @UsePipes(new ValidationPipe())
    @Post('registration')
    async staffRegistration(@Body() createStaffDto: CreateStaffDto) {
        return await this.staffAuthService.registration(createStaffDto);
    }
}
