import { ProductEntity } from '../product/product.entity';

export class OrderProductEntity {
    constructor(
        private readonly _order: OrderProductEntity,
        private readonly _product: ProductEntity,
        private readonly _quantity: number,
    ) {}

    get product(): ProductEntity {
        return this._product;
    }

    get quantity(): number {
        return this._quantity;
    }
}
