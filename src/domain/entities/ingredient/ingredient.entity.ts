import { BaseEntity } from '../../common/entity/Base.entity';

export type IngredientEntityId = number;

export class IngredientEntity extends BaseEntity<IngredientEntityId> {
    private _name: string;
    private _unit: string;

    constructor(name: string, unit: string, id?: IngredientEntityId) {
        super(id);

        this._name = name;
        this._unit = unit;
    }
}
