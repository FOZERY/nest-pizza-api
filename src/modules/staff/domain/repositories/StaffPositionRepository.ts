import { Either } from '@sweet-monads/either';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { UniqueID } from 'src/shared/domain/UniqueID';
import { StaffPosition } from '../StaffPosition';

export interface StaffPositionRepository {
    findById(
        id: UniqueID,
    ): Promise<Either<GeneralErrors.UnexpectedError, StaffPosition | null>>;
}
