export const StaffPositionEnum = {
    MANAGER: 'MANAGER',
    COURIER: 'COURIER',
    CASHIER: 'CASHIER',
    COOK: 'COOK',
} as const;

export class StaffPositionEntity {
    constructor(
        private readonly _id: number,
        private readonly _value: typeof StaffPositionEnum,
        private readonly _description: string,
    ) {}

    get id(): number {
        return this._id;
    }

    get value(): typeof StaffPositionEnum {
        return this._value;
    }

    get description(): string {
        return this._description;
    }
}
