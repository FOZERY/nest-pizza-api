import { Nullable } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export const PermissionsEnum = {} as const;

export class PermissionEntity extends BaseEntity<number> {
    private _value: string;
    private _description: Nullable<string>;

    constructor(value: string, description?: string, id?: number) {
        super(id);

        this._value = value;

        this._description = description || null;
    }
}
