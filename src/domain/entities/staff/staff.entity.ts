import { BaseEntity } from '../../common/entity/Base.entity';
import { RestaurantEntityId } from '../restaurant/restaurant.entity';
import { StaffPositionEntity } from '../staff-position/staff-position.entity';
import { StaffRoleEntity } from '../staff-role/staff-role.entity';

export type StaffEntityID = number;

export class StaffEntity extends BaseEntity<StaffEntityID> {
    private _login: string;

    private _password: string;

    private _firstName: string;

    private _lastName: string;

    private _phoneNumber: string;

    private _restaurant: RestaurantEntityId;

    private _role: StaffRoleEntity;

    private _position: StaffPositionEntity;

    private _info?: string;

    private _patronymic?: string;

    constructor(
        login: string,
        password: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        restaurantId: RestaurantEntityId,
        position: StaffPositionEntity,
        role: StaffRoleEntity,

        patronymic?: string,
        info?: string,
        id?: StaffEntityID,
    ) {
        super(id);

        this._login = login;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._restaurantId = restaurantId;
        this._position = position;
        this._role = role;

        this._patronymic = patronymic;
        this._info = info;
    }

    public get login(): string {
        return this._login;
    }

    public get password(): string {
        return this._password;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public get restaurantId(): RestaurantEntityId {
        return this._restaurantId;
    }

    public get staffPositionId(): StaffPositionEntity {
        return this._position;
    }

    public get roleId(): StaffRoleEntity {
        return this._role;
    }

    public get patronymic(): string | undefined {
        return this._patronymic;
    }

    public get info(): string | undefined {
        return this._info;
    }
}
