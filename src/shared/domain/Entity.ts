import { UniqueID } from './UniqueID';

export abstract class Entity<TProps> {
    protected readonly _id: UniqueID;
    protected _props: TProps;

    constructor(props: TProps, id?: UniqueID) {
        this._id = id || new UniqueID();
        this._props = props;
    }
}
