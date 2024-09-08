import { Nullable } from '../../common/common.types';
import { BaseEntity } from '../../common/entity/Base.entity';

export const StaffPositionEnum = {
    MANAGER: 'MANAGER',
    COURIER: 'COURIER',
    CASHIER: 'CASHIER',
    COOK: 'COOK',
} as const;

export type StaffPositionEntityId = number;

export class StaffPositionEntity extends BaseEntity<StaffPositionEntityId> {
    private _value: string;
    private _description: Nullable<string>;

    constructor(
        value: string,
        description?: string,
        id?: StaffPositionEntityId,
    ) {
        super(id);

        this._value = value;
        this._description = description || null;
    }
}
