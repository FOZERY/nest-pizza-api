import { TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export class RestaurantEntity extends BaseEntity<number> {
    private _addressId: TIdentifier;
    private _openingTime: Date;
    private _closingTime: Date;
    private _phoneNumber: string;

    constructor(
        addressId: TIdentifier,
        openingTime: Date,
        closingTime: Date,
        phoneNumber: string,

        id?: number,
    ) {
        super(id);

        this._addressId = addressId;
        this._openingTime = openingTime;
        this._closingTime = closingTime;
        this._phoneNumber = phoneNumber;
    }
}
