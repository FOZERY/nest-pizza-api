import { UserEntity } from '../user/user.entity';
import { BaseEntity } from '../../common/entity/Base.entity';

export class CardEntity extends BaseEntity<number> {
    private _userId: UserEntity;
    private _cardNumber: string;
    private _cardExpiry: Date;
    private _cardHolderName: string;
    private _cardType: string;

    constructor(
        userId: UserEntity,
        cardNumber: string,
        cardExpiry: Date,
        cardHolderName: string,
        cardType: string,
        id?: number,
    ) {
        super(id);

        this._userId = userId;
        this._cardNumber = cardNumber;
        this._cardExpiry = cardExpiry;
        this._cardHolderName = cardHolderName;
        this._cardType = cardType;
    }
}
