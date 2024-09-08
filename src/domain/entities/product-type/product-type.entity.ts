import { BaseEntity } from '../../common/entity/Base.entity';

export const ProductTypeValueEnum = {
    PIZZA: 'PIZZA',
    DRINK: 'DRINK',
    SNACK: 'SNACK',
    DESERT: 'DESERT',
    ROLL: 'ROLL',
} as const;

export type ProductTypeEntityId = number;

export class ProductTypeEntity extends BaseEntity<ProductTypeEntityId> {
    private _value: string;

    constructor(value: string, id?: ProductTypeEntityId) {
        super(id);
        this._value = value;
    }
}
