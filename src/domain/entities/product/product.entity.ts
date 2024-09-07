import { Nullable, TIdentifier } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export class ProductEntity extends BaseEntity<number> {
    private _productTypeId: TIdentifier;
    private _price: number;
    private _name: string;
    private _isInSlider: boolean;
    private _imageUrl: Nullable<string>;
    private _description: Nullable<string>;

    constructor(
        productTypeId: TIdentifier,
        price: number,
        name: string,
        isInSlider?: boolean,
        imageUrl?: string,
        description?: string,

        id?: number,
    ) {
        super(id);

        this._productTypeId = productTypeId;
        this._price = price;
        this._name = name;
        this._isInSlider = isInSlider || false;
        this._imageUrl = imageUrl || null;
        this._description = description || null;
    }
}
