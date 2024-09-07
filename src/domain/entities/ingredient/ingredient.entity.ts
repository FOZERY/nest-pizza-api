import { BaseEntity } from '../../common/entity/Base.entity';

export class IngredientEntity extends BaseEntity<number> {
    private _name: string;
    private _unit: string;

    constructor(name: string, unit: string, id?: number) {
        super(id);

        this._name = name;
        this._unit = unit;
    }
}
