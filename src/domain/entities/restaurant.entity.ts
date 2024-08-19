import { AddressEntity } from './address.entity';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';
import { StaffEntity } from './staff.entity';
import { PhoneNumberVo } from '../value-objects/phone-number.vo';

export class RestaurantEntity {
    constructor(
        private readonly _id: number,
        private readonly _address: AddressEntity,
        private readonly _openingTime: Date,
        private readonly _closingTime: Date,
        private readonly _phoneNumber: PhoneNumberVo,
        private readonly _staff: StaffEntity[],
        private readonly _orders: OrderEntity[],
        private readonly _products: ProductEntity[],
    ) {}

    get id(): number {
        return this._id;
    }

    get address(): AddressEntity {
        return this._address;
    }

    get openingTime(): Date {
        return this._openingTime;
    }

    get closingTime(): Date {
        return this._closingTime;
    }

    get phoneNumber(): PhoneNumberVo {
        return this._phoneNumber;
    }

    get staff(): StaffEntity[] {
        return this._staff;
    }
    get products(): ProductEntity[] {
        return this._products;
    }
    get orders(): OrderEntity[] {
        return this._orders;
    }
}
