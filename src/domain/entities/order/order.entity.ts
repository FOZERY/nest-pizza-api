import { Nullable, TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export type OrderEntityId = number;

export class OrderEntity extends BaseEntity<OrderEntityId> {
    private _cashierId: Nullable<TIdentifier>;
    private _restaurantId: Nullable<TIdentifier>;
    private _orderTime: Date;
    private _orderStatusId: TIdentifier;
    private _orderTypeId: TIdentifier;
    private _userId: Nullable<TIdentifier>;
    private _courierId: Nullable<TIdentifier>;
    private _deliveryAddressId: Nullable<TIdentifier>;
    private _deliveryPrice: Nullable<number>;
    private _deliveryRequestedTime: Nullable<Date>;
    private _deliveryActualTime: Nullable<Date>;

    constructor(
        restaurantId: TIdentifier,
        orderTime: Date,
        orderStatusId: TIdentifier,
        orderTypeId: TIdentifier,
        cashierId?: TIdentifier,
        userId?: TIdentifier,
        courierId?: TIdentifier,
        deliveryAddressId?: TIdentifier,
        deliveryPrice?: number,
        deliveryRequestedTime?: Date,
        deliveryActualTime?: Date,
        id?: OrderEntityId,
    ) {
        super(id);

        this._restaurantId = restaurantId;
        this._orderTime = orderTime;
        this._orderStatusId = orderStatusId;
        this._orderTypeId = orderTypeId;
        this._cashierId = cashierId || null;
        this._userId = userId || null;
        this._deliveryAddressId = deliveryAddressId || null;
        this._courierId = courierId || null;
        this._deliveryPrice = deliveryPrice || null;
        this._deliveryRequestedTime = deliveryRequestedTime || null;
        this._deliveryActualTime = deliveryActualTime || null;
    }
}
