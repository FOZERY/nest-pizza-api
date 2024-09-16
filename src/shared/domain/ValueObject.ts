import { isEqual } from 'lodash';

export abstract class ValueObject {
    protected constructor() {}

    public equals(vo?: ValueObject): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (!(vo instanceof this.constructor)) {
            return false;
        }

        return isEqual(vo, this);
    }
}
