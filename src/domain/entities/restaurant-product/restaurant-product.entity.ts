import { ProductEntityId } from '../product/product.entity';
import { RestaurantEntityId } from '../restaurant/restaurant.entity';

export class RestaurantProductEntity {
    private _productId: ProductEntityId;
    private _restaurantId: RestaurantEntityId;
    private _availability: boolean;
    private _custom_price: number;

    constructor(
        productId: ProductEntityId,
        restaurant: RestaurantEntityId,
        availability: boolean,
        custom_price: number,
    ) {
        this._productId = productId;
        this._restaurantId = restaurant;
        this._availability = availability;
        this._custom_price = custom_price;
    }
}
