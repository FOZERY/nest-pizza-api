import { Nullable, TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export class StaffEntity extends BaseEntity<number> {
    private _login: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;
    private _patronymic: Nullable<string>;
    private _phoneNumber: string;
    private _restaurantId: TIdentifier;
    private _staffPositionId: TIdentifier;
    private _roleId: TIdentifier;
    private _info: Nullable<string>;

    constructor(
        login: string,
        password: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        restaurantId: TIdentifier,
        staffPositionId: TIdentifier,
        roleId: TIdentifier,

        patronymic?: string,
        info?: string,
        id?: number,
    ) {
        super(id);

        this._login = login;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._restaurantId = restaurantId;
        this._staffPositionId = staffPositionId;
        this._roleId = roleId;

        this._patronymic = patronymic || null;
        this._info = info || null;
    }
}
