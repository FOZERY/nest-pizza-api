export namespace StaffErrors {
    export abstract class StaffError extends Error {
        protected constructor(message: string) {
            super(message);
            this.name = this.constructor.name;
        }
    }

    export class LoginAlreadyExistsError extends StaffError {
        constructor(login: string) {
            super(`Сотрудник с логином ${login} уже существует.`);
        }
    }

    export class InvalidLoginLengthError extends StaffError {
        constructor(minLength: number, maxLength: number) {
            super(
                `Длина логина должна быть не меньше ${minLength} и не больше ${maxLength}`,
            );
        }
    }

    export class InvalidLoginFormatError extends StaffError {
        constructor() {
            super(
                `Логин может состоять только из букв латинского алфавита, цифр и следующих символов ('-', '_')`,
            );
        }
    }

    export class InvalidPasswordLengthError extends StaffError {
        constructor(minLength: number, maxLength: number) {
            super(
                `Длина пароля должна быть не меньше ${minLength} и не больше ${maxLength}`,
            );
        }
    }

    export class InvalidPasswordFormatError extends StaffError {
        constructor() {
            super(
                `Пароль может состоять только из символов латинского алфавита, цифр и специальных символов`,
            );
        }
    }

    export class WeakPasswordError extends StaffError {
        constructor() {
            super(
                `Придумайте более строгий пароль (пароль должен содержать от 6 символов, маленькие и большие буквы латинского алфавита, цифры и специальные символы, а также не иметь более 5 повторений символов подряд)`,
            );
        }
    }

    export class InvalidPhoneNumberError extends StaffError {
        constructor() {
            super(`Номер телефона не соответствует формату`);
        }
    }

    export class InvalidFirstNameFormatError extends StaffError {
        constructor() {
            super(`Имя должно содержать только буквы русского алфавита.`);
        }
    }

    export class InvalidFirstNameLengthError extends StaffError {
        constructor(minLength: number, maxLength: number) {
            super(
                `Длина имени должна быть не меньше ${minLength} и не больше ${maxLength}`,
            );
        }
    }

    export class InvalidLastNameFormatError extends StaffError {
        constructor() {
            super(`Имя должно содержать только буквы русского алфавита.`);
        }
    }

    export class InvalidLastNameLengthError extends StaffError {
        constructor(minLength: number, maxLength: number) {
            super(
                `Длина имени должна быть не меньше ${minLength} и не больше ${maxLength}`,
            );
        }
    }
}
