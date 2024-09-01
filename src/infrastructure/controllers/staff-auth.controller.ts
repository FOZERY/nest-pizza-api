import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth/staff')
export class StaffAuthController {
    constructor() {}

    @Post('login')
    staffLogin() {}

    @Post('registration')
    staffRegistration() {}
}
