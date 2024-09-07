import { Nullable } from '../../common/common.types';

export class UserEntity {
    private _firstName: string;
    private _phoneNumber: string;
    private _email: Nullable<string>;

    constructor(firstName: string, phoneNumber: string, email?: string) {
        this._firstName = firstName;
        this._phoneNumber = phoneNumber;
        this._email = email || null;
    }
}
