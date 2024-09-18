import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { left } from '@sweet-monads/either';
import { StaffPositionRepository } from 'src/modules/staff/domain/repositories/StaffPositionRepository';
import { StaffRepository } from 'src/modules/staff/domain/repositories/StaffRepository';
import { CreateStaffCommand } from '../CreateStaffCommand';

@CommandHandler(CreateStaffCommand)
export class CreateStaffHandler implements ICommandHandler<CreateStaffCommand> {
    constructor(
        private readonly staffRepository: StaffRepository,
        private readonly staffPositionRepository: StaffPositionRepository,
    ) {}

    async execute(command: CreateStaffCommand) {
        const {
            login,
            firstName,
            lastName,
            password,
            phoneNumber,
            positionId,
            restaurantId,
            roleId,
            patronymic,
        } = command;

        // const loginOrFailure = StaffLogin.create(login)

        const staffOrFailure = await this.staffRepository.findByLogin(login);

        if (staffOrFailure.isLeft()) {
            return left(staffOrFailure.value);
        }
    }
}
