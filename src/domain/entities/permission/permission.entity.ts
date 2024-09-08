import { Nullable } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export const PermissionsEnum = {} as const;

export type PermissionEntityId = number;

export class PermissionEntity extends BaseEntity<PermissionEntityId> {
    private _value: string;
    private _description: Nullable<string>;

    constructor(value: string, description?: string, id?: PermissionEntityId) {
        super(id);

        this._value = value;

        this._description = description || null;
    }
}
