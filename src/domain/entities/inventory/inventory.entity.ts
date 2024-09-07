import { TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export class InventoryEntity extends BaseEntity<number> {
    _restaurantId: TIdentifier;
    _ingredientId: TIdentifier;
    _quantity: number;

    constructor(
        restaurantId: TIdentifier,
        ingredientId: TIdentifier,
        quantity: number,
        id?: number,
    ) {
        super(id);

        this._restaurantId = restaurantId;
        this._ingredientId = ingredientId;
        this._quantity = quantity;
    }
}
