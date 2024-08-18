import { Nullable } from '../common/common.types';
import { AddressEntity } from './address.entity';
import { StaffEntity } from './staff.entity';
import { UserEntity } from './user.entity';
import { RestaurantEntity } from './restaurant.entity';
import { ProductEntity } from './product.entity';

export const OrderTypeEnum = {
    DINEIN: 'DINEIN', // В ресторане
    TAKEAWAY: 'TAKEAWAY', // Навынос
    DELIVERY: 'DELIVERY', // Доставка
} as const;

export const OrderStatusEnum = {
    PENDING: 'PENDING', // Заказ ожидает обработки
    PROCESSING: 'PROCESSING', // Заказ в процессе приготовления
    READY: 'READY', // Заказ готов к выдаче
    IN_DELIVERY: 'IN_DELIVERY', // Доставляется
    DELIVERED: 'DELIVERED', // Заказ доставлен
    CANCELLED: 'CANCELLED', // Заказ отменен
};

export class OrderEntity {
    get products(): ProductEntity[] {
        return this._products;
    }
    constructor(
        private _id: number,
        private _cashier: StaffEntity,
        private _restaurant: RestaurantEntity,
        private _order_time: Date,
        private _order_status: typeof OrderStatusEnum,
        private _order_type: typeof OrderTypeEnum,
        private _order_price: number, // TODO: сделать Money,
        private _products: ProductEntity[],
        private _customer: Nullable<UserEntity>,
        private _courier: Nullable<StaffEntity>,
        private _delivery_address: AddressEntity,
        private _delivery_price: Nullable<number>,
        private _delivery_requested_time: Nullable<Date>,
        private _delivery_actual_time: Nullable<Date>,
    ) {}

    get id(): number {
        return this._id;
    }

    get cashier(): StaffEntity {
        return this._cashier;
    }

    get restaurant(): RestaurantEntity {
        return this._restaurant;
    }

    get order_time(): Date {
        return this._order_time;
    }

    get order_status(): typeof OrderStatusEnum {
        return this._order_status;
    }

    get order_type(): typeof OrderTypeEnum {
        return this._order_type;
    }

    get order_price(): number {
        return this._order_price;
    }

    get customer(): Nullable<UserEntity> {
        return this._customer;
    }

    get courier(): Nullable<StaffEntity> {
        return this._courier;
    }

    get delivery_address(): AddressEntity {
        return this._delivery_address;
    }

    get delivery_price(): Nullable<number> {
        return this._delivery_price;
    }

    get delivery_requested_time(): Nullable<Date> {
        return this._delivery_requested_time;
    }

    get delivery_actual_time(): Nullable<Date> {
        return this._delivery_actual_time;
    }
}
