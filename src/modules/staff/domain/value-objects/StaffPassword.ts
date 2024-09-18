import { Either, left, right } from '@sweet-monads/either';
import * as bcrypt from 'bcryptjs';
import { Guard } from 'src/shared/core/Guard';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { ValueObject } from 'src/shared/domain/ValueObject';
import { StaffErrors } from '../errors/StaffErrors';

export class StaffPassword extends ValueObject {
    public readonly password: string;
    public readonly hashed?: boolean;

    private static readonly minLength: number = 6;
    private static readonly maxLength: number = 100;

    private readonly salt_rounds: number = 10;

    private constructor(password: string, hashed?: boolean) {
        super();
        this.password = password;
        this.hashed = hashed;
    }

    public static create(
        password: string,
        hashed?: boolean,
    ): Either<
        | GeneralErrors.NullOrUndefinedValue
        | StaffErrors.WeakPasswordError
        | StaffErrors.NotLatinCharactersError
        | GeneralErrors.InvalidLength
        | GeneralErrors.InvalidValue,
        StaffPassword
    > {
        if (!Guard.notNullOrUndefined(password)) {
            return left(GeneralErrors.NullOrUndefinedValue.create('password'));
        }

        const trimmedPassword = this.trimPassword(password);

        if (!this.isValidLength(trimmedPassword)) {
            return left(GeneralErrors.InvalidLength.create('password'));
        }

        return right(new StaffPassword(trimmedPassword, hashed));
    }

    private static trimPassword(password: string) {
        return password.trim();
    }

    private static isValidLength(password: string): boolean {
        return (
            password.length >= this.minLength &&
            password.length <= this.maxLength
        );
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

    public isAlreadyHashed(): boolean {
        return !!this.hashed;
    }

    private async hashPassword(
        password: string,
    ): Promise<Either<unknown, string>> {
        try {
            const hash = await bcrypt.hash(password, this.salt_rounds);
            return right(hash);
        } catch (err) {
            return left(err);
        }
    }

    public async getHashedValue(): Promise<Either<unknown, string>> {
        if (this.isAlreadyHashed()) {
            return right(this.password);
        } else {
            const hashedPasswordOrFailure = await this.hashPassword(
                this.password,
            );

            if (hashedPasswordOrFailure.isLeft()) {
                return left(hashedPasswordOrFailure.value);
            } else {
                return right(hashedPasswordOrFailure.value);
            }
        }
    }
}
