import { IngredientyEntity } from '../ingredient/ingredient.entity';
import { RestaurantEntity } from '../restaurant/restaurant.entity';

export class InventoryEntity {
    constructor(
        restraunt: RestaurantEntity,
        ingredient: IngredientyEntity,
        quantity: number,
        id?: number,
    ) {}
}
