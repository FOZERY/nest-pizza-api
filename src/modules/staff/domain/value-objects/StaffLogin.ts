import { left } from '@sweet-monads/either';
import { Guard } from 'src/shared/core/Guard';
import { ValueObject } from 'src/shared/domain/ValueObject';
import { StaffErrors } from '../errors/StaffErrors';

export interface StaffLoginProps {
    value: string;
}

export class StaffLogin extends ValueObject {
    private static minLength = 4;
    private static maxLength = 100;

    private value: string;
 
    private constructor(value: string) {
        super();
        this.value = value;
    }

    public static create(login: string) {
        const trimmedLogin = this.trimLogin(login);

        const validationResultOrFail = this.validateLogin(trimmedLogin);

        if (validationResultOrFail.isLeft()) {
            return left(validationResultOrFail.value);
        }

        return right(new StaffLogin({ value: trimmedLogin }));
    }

    private static trimLogin(login: string): string {
        return login.trim();
    }

    private static validateLogin(login: string) {
        if(!Guard.notEmpty(login)) {
            returen left(new StaffErrors.)
        }
        
        if (!this.isValidLength(login)) {
            return left(new StaffErrors.());
        }

        return right(null);
    }

    private static isValidLength(login: string): boolean {
        return login.length >= 4 && login.length <= 100;
    }

    private static isValidLogin(login: string): boolean {
        const loginRegex = /^[a-zA-Z0-9_]+$/;
        return loginRegex.test(login);
    }
}
