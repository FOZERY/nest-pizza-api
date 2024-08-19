import { Optional } from '../common/common.types';

export class FullNameVo {
    constructor(
        private readonly _firstName: string,
        private readonly _lastName: string,
        private readonly _patronymic?: Optional<string>,
    ) {}

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get patronymic(): Optional<string> {
        return this._patronymic;
    }

    get FullName(): string {
        return `${this._lastName} ${this._firstName} ${this._patronymic ?? ''}`.trim();
    }
}
