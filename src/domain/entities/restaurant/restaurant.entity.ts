import { BaseEntity } from '../../common/entity/Base.entity';
import { AddressEntityId } from '../address/address.entity';

export type RestaurantEntityId = number;

export class RestaurantEntity extends BaseEntity<RestaurantEntityId> {
    private _addressId: AddressEntityId;
    private _openingTime: Date;
    private _closingTime: Date;
    private _phoneNumber: string;

    constructor(
        addressId: AddressEntityId,
        openingTime: Date,
        closingTime: Date,
        phoneNumber: string,

        id?: RestaurantEntityId,
    ) {
        super(id);

        this._addressId = addressId;
        this._openingTime = openingTime;
        this._closingTime = closingTime;
        this._phoneNumber = phoneNumber;
    }
}
