import { Controller, Post } from '@nestjs/common';

@Controller('auth/user')
export class UserAuthController {
    constructor() {}

    @Post('login')
    userLogin() {}

    @Post('registration')
    userRegistration() {}
}
