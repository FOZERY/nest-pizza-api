import { DomainError } from 'src/shared/domain/DomainError';

export enum StaffError {
    LoginTaken,
}

export namespace CreateStaffError {
    export const loginTakenError = (): DomainError<StaffError.LoginTaken> => ({
        message: `Сотрудник с таким логином уже существует`,
        error: StaffError.LoginTaken,
    });
}
