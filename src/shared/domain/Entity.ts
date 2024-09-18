import { UniqueID } from './UniqueID';

export abstract class Entity<TProps> {
    protected readonly id: UniqueID;
    protected props: TProps;

    constructor(props: TProps, id?: UniqueID) {
        this.id = id || new UniqueID();
        this.props = props;
    }
}
