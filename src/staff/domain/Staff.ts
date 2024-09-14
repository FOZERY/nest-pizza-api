import { Entity } from 'src/shared/domain/Entity';
import { UniqueID } from 'src/shared/domain/UniqueID';

export interface StaffProps {
    login: StaffLogin;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    restaurantId: string;
    role: any;
    position: any;
    patronymic?: string;
}

export class Staff extends Entity<StaffProps> {
    private constructor(props: StaffProps, id?: UniqueID) {
        super(props, id);
    }
}
