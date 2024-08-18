import { AddressEntity } from './address.entity';
import { Optional } from '../common/common.types';

export class UserEntity {
    constructor(
        private _id: number,
        private _firstName: string,
        private _phone: string,
        private _addresses?: Optional<AddressEntity[]>,
        private _email?: Optional<string>,
    ) {}

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get phone(): string {
        return this._phone;
    }

    get addresses(): Optional<AddressEntity[]> {
        return this._addresses;
    }

    get email(): Optional<string> {
        return this._email;
    }
}
