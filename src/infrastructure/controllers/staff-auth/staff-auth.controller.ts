import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { StaffAuthService } from 'src/application/services/staff-auth/staff-auth.service';
import { CreateStaffDto } from 'src/shared/dtos/staff/create-staff.dto';

@Controller('auth/staff')
export class StaffAuthController {
    constructor(private readonly staffAuthService: StaffAuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('registration')
    async registration(@Body() createStaffDto: CreateStaffDto) {
        return await this.staffAuthService.registration(createStaffDto);
    }
}
