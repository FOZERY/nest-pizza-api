import { ICommand } from '@nestjs/cqrs';

export class CreateStaffCommand implements ICommand {
    constructor(
        public readonly login: string,
        public readonly password: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: string,
        public readonly restaurantId: string,
        public readonly roleId: string,
        public readonly positionId: string,
        public readonly patronymic?: string,
    ) {}
}
