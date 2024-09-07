export class PhoneNumberVo {
    constructor(private _phoneNumber: string) {
        this.validate();
    }

    private validate(): void {
        console.log(this._phoneNumber);
        const phoneNumberRegex = /^(\+7\d{10}|8\d{10}|7\d{10})$/;
        if (!phoneNumberRegex.test(this._phoneNumber)) {
            throw new Error(`Invalid phone number: ${this._phoneNumber}`);
        }

        if (this._phoneNumber.startsWith('+7')) {
            this._phoneNumber = '8' + this._phoneNumber.slice(2);
        }

        if (this._phoneNumber.startsWith('7')) {
            this._phoneNumber = '8' + this._phoneNumber.slice(1);
        }
    }

    get phoneNumberWithSeven() {
        return '7' + this._phoneNumber.slice(1);
    }

    get phoneNumberWithPlusSeven() {
        return '+7' + this._phoneNumber.slice(1);
    }

    get phoneNumberWithEight() {
        return this._phoneNumber;
    }
}
