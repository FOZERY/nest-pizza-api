import { Either } from '@sweet-monads/either';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { Staff, StaffID } from '../Staff';

export interface StaffRepository {
    findByLogin(
        login: string,
    ): Promise<Either<GeneralErrors.UnexpectedError, Staff | null>>;

    findById(
        id: StaffID,
    ): Promise<Either<GeneralErrors.UnexpectedError, Staff | null>>;

    save(): Promise<Either<GeneralErrors.UnexpectedError, void>>;
}
