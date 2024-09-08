import { TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';
import { IngredientEntityId } from '../ingredient/ingredient.entity';

export class InventoryEntity extends BaseEntity<number> {
    _restaurantId: TIdentifier;
    _ingredientId: IngredientEntityId;
    _quantity: number;

    constructor(
        restaurantId: TIdentifier,
        ingredientId: IngredientEntityId,
        quantity: number,
        id?: number,
    ) {
        super(id);

        this._restaurantId = restaurantId;
        this._ingredientId = ingredientId;
        this._quantity = quantity;
    }
}
