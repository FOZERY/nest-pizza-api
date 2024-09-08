import { BaseEntity } from 'src/domain/common/entity/Base.entity';
import { Nullable } from '../../common/common.types';

export type UserEntityId = number;

export class UserEntity extends BaseEntity<UserEntityId> {
    private _firstName: string;
    private _phoneNumber: string;
    private _email: Nullable<string>;

    constructor(
        firstName: string,
        phoneNumber: string,
        email?: string,
        id?: UserEntityId,
    ) {
        super(id);

        this._firstName = firstName;
        this._phoneNumber = phoneNumber;
        this._email = email || null;
    }
}
