import { ValueObject } from 'src/shared/domain/ValueObject';

export interface StaffLoginProps {
    value: string;
}

export class StaffLogin extends ValueObject<StaffLoginProps> {
    get value(): string {
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

    private static validateLogin(login: string) {
        if (!this.isValidLength(login)) {
            throw new Error(
                'Login should be more than 4 and less than 20 characters',
            );
        }

        if (!this.isValidLogin(login)) {
            throw new Error(
                'Login should contain only latin characters, "_" and numbers',
            );
        }
    }

    public static create(login: string): StaffLogin {
        if (login === null || login === undefined) {
            throw new Error(`Login should be defined`);
        }

        const trimmedLogin = this.trimLogin(login);

        this.validateLogin(trimmedLogin);

        return new StaffLogin({ value: trimmedLogin });
    }
}
