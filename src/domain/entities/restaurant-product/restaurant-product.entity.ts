import { TIdentifier } from '../../common/common.types';

export class RestaurantProductEntity {
    private _productId: TIdentifier;
    private _restaurantId: TIdentifier;
    private _availability: boolean;
    private _custom_price: number;

    constructor(
        productId: TIdentifier,
        restaurant: TIdentifier,
        availability: boolean,
        custom_price: number,
    ) {
        this._productId = productId;
        this._restaurantId = restaurant;
        this._availability = availability;
        this._custom_price = custom_price;
    }
}
