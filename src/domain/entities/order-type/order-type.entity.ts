import { BaseEntity } from '../../common/entity/Base.entity';

export const OrderTypeEnum = {
    DINEIN: 'DINEIN', // В ресторане
    TAKEAWAY: 'TAKEAWAY', // Навынос
    DELIVERY: 'DELIVERY', // Доставка
} as const;

export type OrderTypeEntityId = number;

export class OrderTypeEntity extends BaseEntity<OrderTypeEntityId> {
    private _value: string;

    constructor(value: string, id?: OrderTypeEntityId) {
        super(id);
        this._value = value;
    }
}
