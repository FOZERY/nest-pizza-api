import { RestaurantEntity } from './restaurant.entity';
import { StaffPositionEntity } from './staff-position.entity';

export class StaffEntity {
    constructor(
        private readonly _id: number,
        private readonly _firstName: string,
        private readonly _lastName: string,
        private readonly _phoneNumber: string,
        private readonly _restaurant: RestaurantEntity,
        private readonly _staffPosition: StaffPositionEntity,
    ) {}

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get restaurant(): RestaurantEntity {
        return this._restaurant;
    }

    get staffPosition(): StaffPositionEntity {
        return this._staffPosition;
    }
}
