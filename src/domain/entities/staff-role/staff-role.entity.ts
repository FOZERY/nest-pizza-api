import { Nullable } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export const StaffRoleEnum = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    CASHIER: 'CASHIER',
    COURIER: 'COURIER',
} as const;

export type StaffRoleEntityId = number;

export class StaffRoleEntity extends BaseEntity<StaffRoleEntityId> {
    private _value: string;
    private _description: Nullable<string>;

    constructor(value: string, description?: string, id?: StaffRoleEntityId) {
        super(id);

        this._value = value;
        this._description = description || null;
    }
}
