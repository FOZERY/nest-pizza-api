import { UserEntity } from '../user/user.entity';

export class CardEntity {
    constructor(
        private readonly _id: number,
        private readonly _user: UserEntity,
        private readonly _cardNumber: string,
        private readonly _cardExpiry: Date,
        private readonly _cardHolderName: string,
        private readonly _cardType: string,
    ) {}

    get id(): number {
        return this._id;
    }

    get user(): UserEntity {
        return this._user;
    }

    get cardNumber(): string {
        return this._cardNumber;
    }

    get cardExpiry(): Date {
        return this._cardExpiry;
    }

    get cardHolderName(): string {
        return this._cardHolderName;
    }

    get cardType(): string {
        return this._cardType;
    }
}
