import { BaseEntity } from '../../common/entity/Base.entity';

export const OrderStatusEnum = {
    PENDING: 'PENDING', // Заказ ожидает обработки
    PROCESSING: 'PROCESSING', // Заказ в процессе приготовления
    READY: 'READY', // Заказ готов к выдаче
    IN_DELIVERY: 'IN_DELIVERY', // Доставляется
    DELIVERED: 'DELIVERED', // Заказ доставлен
    CANCELLED: 'CANCELLED', // Заказ отменен
} as const;

export class OrderStatusEntity extends BaseEntity<number> {
    private _value: string;

    constructor(value: string, id?: number) {
        super(id);
        this._value = value;
    }
}
