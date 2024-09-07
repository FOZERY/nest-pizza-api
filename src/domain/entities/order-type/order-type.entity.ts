import { BaseEntity } from '../../common/entity/Base.entity';

export const OrderTypeEnum = {
    DINEIN: 'DINEIN', // В ресторане
    TAKEAWAY: 'TAKEAWAY', // Навынос
    DELIVERY: 'DELIVERY', // Доставка
} as const;

export class OrderTypeEntity extends BaseEntity<number> {
    private _value: string;

    constructor(value: string, id?: number) {
        super(id);
        this._value = value;
    }
}
