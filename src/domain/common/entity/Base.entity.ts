import { Nullable } from '../common.types';

export class BaseEntity<TIdentifier extends number | string> {
    constructor(protected _id?: TIdentifier) {}

    public get id(): Nullable<TIdentifier> {
        return this._id === undefined ? null : this._id;
    }
}
