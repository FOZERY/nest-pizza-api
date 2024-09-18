import { left, right } from '@sweet-monads/either';
import { Entity } from 'src/shared/domain/Entity';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { UniqueID } from 'src/shared/domain/UniqueID';
import { StaffPosition } from './StaffPosition';
import { StaffRole } from './StaffRole';
import { StaffLogin } from './value-objects/StaffLogin';
import { StaffPassword } from './value-objects/StaffPassword';

export interface StaffProps {
    login: StaffLogin;
    password: StaffPassword;
    firstName: string;
    lastName: string;
    phoneNumber: string;
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

    public static create(props: StaffProps, id?: StaffID) {
        if (props === undefined || props === null) {
            return left(
                GeneralErrors.NullOrUndefinedValue.create('Staff properties'),
            );
        }

        return right(new Staff(props, id));
    }
}
