import { IngredientyEntity } from '../ingredient/ingredient.entity';
import { ProductEntity } from '../product/product.entity';

export class ProductIngredientEntity {
    constructor(
        ingredient: IngredientyEntity,
        product: ProductEntity,
        quantity: number,
        id?: number,
    ) {}
}
