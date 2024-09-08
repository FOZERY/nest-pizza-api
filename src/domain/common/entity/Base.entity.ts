export class BaseEntity<TIdentifier extends number | string> {
    constructor(private readonly _id?: TIdentifier) {}

    public get id(): TIdentifier | undefined {
        return this._id;
    }
}
