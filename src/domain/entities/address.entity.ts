import { Optional } from '../common/common.types';
import { UserEntity } from './user.entity';

export class AddressEntity {
    constructor(
        private _id: number,
        private _country: string,
        private _region: string,
        private _city: string,
        private _street: string,
        private _houseNumber: string,
        private _postalCode: string,
        private _users?: Optional<UserEntity[]>,
        private _apartment?: Optional<string>,
        private _block?: Optional<string>,
    ) {}

    get id(): number {
        return this._id;
    }

    get country(): string {
        return this._country;
    }

    get region(): string {
        return this._region;
    }

    get city(): string {
        return this._city;
    }

    get street(): string {
        return this._street;
    }

    get houseNumber(): string {
        return this._houseNumber;
    }

    get users(): Optional<UserEntity[]> {
        return this._users;
    }

    get postalCode(): string {
        return this._postalCode;
    }

    get apartment(): Optional<string> {
        return this._apartment;
    }

    get block(): Optional<string> {
        return this._block;
    }
}
