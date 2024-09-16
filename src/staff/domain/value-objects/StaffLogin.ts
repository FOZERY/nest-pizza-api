import { Either, left, right } from 'src/shared/core/Either';
import { ValueObject } from 'src/shared/domain/ValueObject';
import { StaffErrors } from '../errors/StaffErrors';
import { Guard } from '../../../shared/core/Guard';
import StaffError = StaffErrors.StaffError;

export interface StaffLoginProps {
    value: string;
}

export class StaffLogin extends ValueObject<StaffLoginProps> {
    private static minLength = 4;
    private static maxLength = 100;

    public get value(): string {
        return this.props.value;
    }

    private constructor(props: StaffLoginProps) {
        super(props);
    }

    private static isValidLength(login: string): boolean {
        return login.length >= 4 && login.length <= 100;
    }

    private static isValidLogin(login: string): boolean {
        const loginRegex = /^[a-zA-Z0-9_]+$/;
        return loginRegex.test(login);
    }

    private static trimLogin(login: string): string {
        return login.trim();
    }

    private static validateLogin(login: string): Either<StaffError, null> {
        if (!this.isValidLength(login)) {
            return left(
                new StaffErrors.InvalidLoginLengthError(
                    this.minLength,
                    this.maxLength,
                ),
            );
        }

        if (!this.isValidLogin(login)) {
            return left(new StaffErrors.InvalidLoginFormatError());
        }

        return right(null);
    }

    public static create(login: string): Either<StaffError, StaffLogin> {
        const loginResult = Guard.notNullOrUndefined(login, 'login');

        if (loginResult.isLeft()) {
            return left(loginResult.value);
        }

        const trimmedLogin = this.trimLogin(login);

        const validationResultOrFail = this.validateLogin(trimmedLogin);

        if (validationResultOrFail.isLeft()) {
            return left(validationResultOrFail.value);
        }

        return right(new StaffLogin({ value: trimmedLogin }));
    }
}
