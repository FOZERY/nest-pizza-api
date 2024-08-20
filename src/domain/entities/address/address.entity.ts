import { Optional } from '../../common/common.types';

export class AddressEntity {
    constructor(
        private _id: number,
        private _country: string,
        private _region: string,
        private _city: string,
        private _street: string,
        private _houseNumber: string,
        private _postalCode: string,
        private _apartment?: Optional<string>,
        private _block?: Optional<string>,
    ) {}

    get fullAddress(): string {
        const parts = [
            this._country,
            this._region,
            this._city,
            this._street,
            this._houseNumber,
            this._apartment,
            this._block,
            this._postalCode,
        ]
            .filter((part) => part !== undefined && part !== null)
            .join(' ');

        return parts;
    }
}
