import { TIdentifier } from '../../common/common.types';

export class OrderProductEntity {
    private _orderId: TIdentifier;
    private _productId: TIdentifier;
    private _quantity: number;

    constructor(
        orderId: TIdentifier,
        productId: TIdentifier,
        quantity: number,
    ) {
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
    }
}
