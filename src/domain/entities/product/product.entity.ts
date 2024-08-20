import { Optional } from '../../common/common.types';

export const ProductTypeEnum = {
    PIZZA: 'PIZZA',
    DRINK: 'DRINK',
    SNACK: 'SNACK',
    DESERT: 'DESERT',
    ROLL: 'ROLL',
} as const;

export class ProductEntity {
    constructor(
        private readonly _id: number,
        private readonly _product_type: typeof ProductTypeEnum,
        private readonly _price: number,
        private readonly _name: string,
        private readonly _isInSlider: boolean = false,
        private readonly _imageUrl: Optional<string>,
        private readonly _description?: Optional<string>,
    ) {}

    get id(): number {
        return this._id;
    }

    get product_type(): typeof ProductTypeEnum {
        return this._product_type;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get isInSlider(): boolean {
        return this._isInSlider;
    }

    get imageUrl(): Optional<string> {
        return this._imageUrl;
    }

    get description(): Optional<string> {
        return this._description;
    }
}
