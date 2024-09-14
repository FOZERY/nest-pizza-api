import { ValueObject } from '../ValueObject';

export interface PhoneProps {
    value: string;
}

export class Phone extends ValueObject<PhoneProps> {
    private static phoneRegex: RegExp = /^(?:\+7|7|8)\d{10}$/;

    get value(): string {
        return this.props.value;
    }

    constructor(props: PhoneProps) {
        super(props);
    }

    private static isValidPhone(phone: string): boolean {
        const phoneRegex = this.phoneRegex;
        return phoneRegex.test(phone);
    }

    private static formatPhone(phone: string): string {
        let normalizedPhone = phone.replace(/\D/g, '');

        // Если номер начинается с +7 или 8, заменяем его на 7
        if (normalizedPhone.startsWith('8')) {
            normalizedPhone = '7' + normalizedPhone.slice(1);
        } else if (normalizedPhone.startsWith('+7')) {
            normalizedPhone = '7' + normalizedPhone.slice(2);
        }

        return normalizedPhone;
    }

    private static trimPhone(phone: string): string {
        return phone.trim();
    }

    public static create(phone: string): Phone {
        if (phone === undefined || phone === null) {
            throw new Error('Номер телефона не может быть null или undefined');
        }

        const trimmedPhone = this.trimPhone(phone);

        if (!this.isValidPhone(trimmedPhone)) {
            throw new Error(
                'Номер телефона не соответствуют формату российского номера',
            );
        }

        const formattedPhone = this.formatPhone(phone);

        return new Phone({ value: formattedPhone });
    }
}
