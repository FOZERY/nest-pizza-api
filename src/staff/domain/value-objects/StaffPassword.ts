import { ValueObject } from '../../../shared/domain/ValueObject';
import * as bcrypt from 'bcryptjs';

export interface StaffPasswordProps {
    value: string;
    hashed?: boolean;
}

export enum PasswordErrors {
    InitializeCheck = 'Пароль не должен быть undefined или null',
    LatinCharactersCheck = 'Пароль может содержать только латинские буквы',
    StrongPasswordCheck = 'Пароль должен быть строгим (Содежрать маленькие и большие латинские буквы, цифры и нижние подчеркивания)',
    LengthCheck = 'Пароль должен быть не меньше 6 символов и не больше 100 символов',
    NotRepeatedCharacters = 'Символы пароля не должны повторяться более чем 3 раза подряд',
}

export class StaffPassword extends ValueObject<StaffPasswordProps> {
    private static readonly minLength: number = 6;
    private static readonly maxLength: number = 100;
    private readonly salt_rounds: number = 10;

    get value() {
        return this.props.value;
    }

    private constructor(props: StaffPasswordProps) {
        super(props);
    }

    private static isValidLength(password: string): boolean {
        return (
            password.length >= this.minLength &&
            password.length <= this.maxLength
        );
    }

    private static trimPassword(password: string) {
        return password.trim();
    }

    private static isStrongPassword(password: string): boolean {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        return strongPasswordRegex.test(password);
    }

    private static isContainOnlyLatinCharacters(password: string): boolean {
        const latinRegex = /^[a-zA-Z0-9_-]+$/;
        return latinRegex.test(password);
    }

    private static isNotRepeatedCharacters(password: string): boolean {
        const repeatedCharsRegex = /(.)\1{3,}/; // Запрещает более 3 одинаковых символов подряд
        return !repeatedCharsRegex.test(password);
    }

    private static validatePassword(password: string) {
        if (!this.isValidLength(password)) {
            throw new Error(PasswordErrors.LengthCheck);
        }

        if (!this.isContainOnlyLatinCharacters(password)) {
            throw new Error(PasswordErrors.LatinCharactersCheck);
        }

        if (!this.isStrongPassword(password)) {
            throw new Error(PasswordErrors.StrongPasswordCheck);
        }

        if (!this.isNotRepeatedCharacters(password)) {
            throw new Error(PasswordErrors.NotRepeatedCharacters);
        }
    }

    public isAlreadyHashed(): boolean {
        return !!this.props.hashed;
    }

    private async hashPassword(password: string): Promise<string> {
        try {
            const hash = await bcrypt.hash(password, this.salt_rounds);
            return hash;
        } catch (err) {
            throw err;
        }
    }

    public async getHashedValue() {
        try {
            if (this.isAlreadyHashed()) {
                return this.props.value;
            } else {
                return await this.hashPassword(this.props.value);
            }
        } catch (err) {
            throw err;
        }
    }

    public static create(props: StaffPasswordProps): StaffPassword {
        if (!props || !props.value) {
            throw new Error(PasswordErrors.InitializeCheck);
        }

        const trimmedPassword = this.trimPassword(props.value);

        if (!props.hashed) {
            this.validatePassword(trimmedPassword);
        }

        return new StaffPassword({
            value: trimmedPassword,
            hashed: !!props.hashed,
        });
    }
}
