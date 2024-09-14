import { isEqual } from 'lodash';

export abstract class ValueObject<TProps> {
    protected readonly props: TProps;

    protected constructor(props: TProps) {
        this.props = Object.freeze(props);
    }

    public equals(vo?: ValueObject<TProps>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (vo.props === undefined) {
            return false;
        }

        return isEqual(vo.props, this.props);
    }
}
