import { BaseEntity } from '../../common/entity/Base.entity';

export const ProductTypeValueEnum = {
    PIZZA: 'PIZZA',
    DRINK: 'DRINK',
    SNACK: 'SNACK',
    DESERT: 'DESERT',
    ROLL: 'ROLL',
} as const;

export class ProductTypeEntity extends BaseEntity<number> {
    private _value: string;

    constructor(value: string, id?: number) {
        super(id);
        this._value = value;
    }
}
