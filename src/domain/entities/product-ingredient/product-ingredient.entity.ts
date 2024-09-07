import { TIdentifier } from '../../common/common.types';

export class ProductIngredientEntity {
    private _ingredientId: TIdentifier;
    private _productId: TIdentifier;
    private _quantity: number;

    constructor(
        ingredientId: TIdentifier,
        productId: TIdentifier,
        quantity: number,
    ) {
        this._ingredientId = ingredientId;
        this._productId = productId;
        this._quantity = quantity;
    }
}
