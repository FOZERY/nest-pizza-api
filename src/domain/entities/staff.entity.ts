import { RestaurantEntity } from './restaurant.entity';
import { StaffPositionEntity } from './staff-position.entity';
import { FullNameVo } from '../value-objects/full-name.vo';
import { PhoneNumberVo } from '../value-objects/phone-number.vo';

export class StaffEntity {
    constructor(
        private readonly _id: number,
        private readonly _fullName: FullNameVo,
        private readonly _phoneNumber: PhoneNumberVo,
        private readonly _restaurant: RestaurantEntity,
        private readonly _staffPosition: StaffPositionEntity,
    ) {}

    get id(): number {
        return this._id;
    }

    get phoneNumber(): PhoneNumberVo {
        return this._phoneNumber;
    }

    get restaurant(): RestaurantEntity {
        return this._restaurant;
    }

    get staffPosition(): StaffPositionEntity {
        return this._staffPosition;
    }

    get fullName(): FullNameVo {
        return this._fullName;
    }
}
