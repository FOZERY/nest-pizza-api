import { Entity } from 'src/shared/domain/Entity';
import { UniqueID } from 'src/shared/domain/UniqueID';
import { StaffLogin } from './value-objects/StaffLogin';
import { StaffPassword } from './value-objects/StaffPassword';
import { StaffFirstName } from './value-objects/StaffFirstName';
import { StaffLastName } from './value-objects/StaffLastName';
import { Phone } from '../../shared/domain/ValueObjects/Phone';
import { StaffPosition } from './StaffPosition';
import { StaffRole } from './StaffRole';

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
}
