import { Either, left, right } from 'src/shared/core/Either';
import { ValueObject } from 'src/shared/domain/ValueObject';

type Response = Either<{ message: string }, StaffLogin>;

export interface StaffLoginProps {
    value: string;
}

export class StaffLogin extends ValueObject<StaffLoginProps> {
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

    private static validateLogin(login: string): Response {
        if (!this.isValidLength(login)) {
            return left({ message: 'Error' });
        }

        if (!this.isValidLogin(login)) {
            return left({
                message:
                    'Login should contain only latin characters, "_" and numbers',
            });
        }
    }

    public static create(login: string): Response {
        if (login === null || login === undefined) {
            throw new Error(`Login should be defined`);
        }

        const trimmedLogin = this.trimLogin(login);

        const validationResult = this.validateLogin(trimmedLogin);

        if (validationResult.isLeft()) {
            return left(validationResult.value);
        }

        return right(new StaffLogin({ value: trimmedLogin }));
    }
}
