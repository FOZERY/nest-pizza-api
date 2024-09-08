import { TIdentifier } from '../../common/common.types';
import { OrderEntityId } from '../order/order.entity';

export class OrderProductEntity {
    private _orderId: OrderEntityId;
    private _productId: TIdentifier;
    private _quantity: number;

    constructor(
        orderId: OrderEntityId,
        productId: TIdentifier,
        quantity: number,
    ) {
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
    }
}
