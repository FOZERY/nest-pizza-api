import { Optional } from '../common/common.types';

export class CourierEntity {
    constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string,
        private _phone: string,
        private _patronymic?: Optional<string>,
    ) {}

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get phone(): string {
        return this._phone;
    }

    get patronymic(): Optional<string> {
        return this._patronymic;
    }
}
