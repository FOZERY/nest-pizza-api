import { BaseEntity } from '../../common/entity/Base.entity';
import { Nullable } from '../../common/common.types';

export const StaffPositionEnum = {
    MANAGER: 'MANAGER',
    COURIER: 'COURIER',
    CASHIER: 'CASHIER',
    COOK: 'COOK',
} as const;

export class StaffPositionEntity extends BaseEntity<number> {
    private _value: string;
    private _description: Nullable<string>;

    constructor(value: string, description?: string, id?: number) {
        super(id);

        this._value = value;
        this._description = description || null;
    }
}
