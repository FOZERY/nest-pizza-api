import { Entity } from 'src/shared/domain/Entity';
import { UniqueID } from 'src/shared/domain/UniqueID';
import { Phone } from '../../shared/domain/ValueObjects/Phone';
import { StaffPosition } from './StaffPosition';
import { StaffRole } from './StaffRole';
import { StaffFirstName } from './value-objects/StaffFirstName';
import { StaffLastName } from './value-objects/StaffLastName';
import { StaffLogin } from './value-objects/StaffLogin';
import { StaffPassword } from './value-objects/StaffPassword';
import { Either, left, right } from '@sweet-monads/either';
import { Errors } from 'src/shared/core/Errors';

export interface StaffProps {
    login: StaffLogin;
    password: StaffPassword;
    firstName: StaffFirstName;
    lastName: StaffLastName;
    phoneNumber: Phone;
    restaurantId: string;
    role: StaffRole;
    position: StaffPosition;
    patronymic?: string;
}

export type StaffID = UniqueID;

export class Staff extends Entity<StaffProps> {
    private constructor(props: StaffProps, id?: StaffID) {
        super(props, id);
    }

    public static create(
        props: StaffProps,
        id?: StaffID,
    ): Either<Errors.General.AgainstNullOrUndefined, Staff> {
        if (props === undefined || props === null) {
            return left(Errors.General.AgainstNullOrUndefined.create());
        }

        return right(new Staff(props, id));
    }
}
