import { BaseEntity } from '../../common/entity/Base.entity';
import { Nullable } from '../../common/common.types';

export type AddressEntityId = number;

export class AddressEntity extends BaseEntity<AddressEntityId> {
    private _country: string;
    private _region: string;
    private _city: string;
    private _street: string;
    private _houseNumber: string;
    private _postalCode: string;
    private _apartment?: Nullable<string>;
    private _block?: Nullable<string>;

    constructor(
        country: string,
        region: string,
        city: string,
        street: string,
        houseNumber: string,
        postalCode: string,
        apartment?: Nullable<string>,
        block?: Nullable<string>,
        id?: AddressEntityId,
    ) {
        super(id);

        this._country = country;
        this._region = region;
        this._city = city;
        this._street = street;
        this._houseNumber = houseNumber;
        this._postalCode = postalCode;
        this._apartment = apartment || null;
        this._block = block || null;
    }
}
