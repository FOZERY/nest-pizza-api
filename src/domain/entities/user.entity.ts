import { AddressEntity } from './address.entity';
import { Optional } from '../common/common.types';
import { PhoneNumberVo } from '../value-objects/phone-number.vo';

export class UserEntity {
    constructor(
        private _id: number,
        private _firstName: string,
        private _phoneNumber: PhoneNumberVo,
        private _addresses?: Optional<AddressEntity[]>,
        private _email?: Optional<string>,
    ) {}

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get phoneNumber(): PhoneNumberVo {
        return this._phoneNumber;
    }

    get addresses(): Optional<AddressEntity[]> {
        return this._addresses;
    }

    get email(): Optional<string> {
        return this._email;
    }
}
