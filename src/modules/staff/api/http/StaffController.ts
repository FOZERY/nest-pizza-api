import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

export class CreateStaffDto {
    login: string;

    password: string;

    firstName: string;

    lastName: string;

    phoneNumber: string;

    restaurantId: string;

    roleId: string;

    positionId: string;

    patronymic?: string;
}

@Controller('/staff')
export class StaffController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    async createStaff(@Body() createStaffDto: CreateStaffDto) {
        await this.commandBus.execute();
    }
}
