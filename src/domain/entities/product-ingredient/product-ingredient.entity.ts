import { IngredientEntityId } from '../ingredient/ingredient.entity';
import { ProductEntityId } from '../product/product.entity';

export class ProductIngredientEntity {
    private _ingredientId: IngredientEntityId;
    private _productId: ProductEntityId;
    private _quantity: number;

    constructor(
        ingredientId: IngredientEntityId,
        productId: ProductEntityId,
        quantity: number,
    ) {
        this._ingredientId = ingredientId;
        this._productId = productId;
        this._quantity = quantity;
    }
}
