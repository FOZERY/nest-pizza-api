import { DomainError } from 'src/shared/domain/DomainError';
import { HttpStatusCode } from 'src/shared/domain/enums/HttpStatusCode';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';

export enum StaffErrorMessages {
    WeakPasswordError = `Требуется более строгий пароль (Пароль не должен содержать более 5 повторений символов подряд, содержать как маленькие, так и большие буквы и доп.символы ('-', '_')).`,
    PasswordValidationError = 'Пароль должен состоять только из букв латинского алфавита, цифр, символов нижнего подчеркивания и тире.',
    PasswordInvalidLengthError = 'Пароль должен быть больше 6 символов и меньше 100 символов.',
}

export namespace StaffErrors {
    export class WeakPasswordError extends DomainError {
        public constructor() {
            super(
                HttpStatusCode.BAD_REQUEST,
                StaffErrorMessages.WeakPasswordError,
            );
        }
    }

    export class PasswordValidationError extends GeneralErrors.ValidationError {
        public constructor() {
            super(StaffErrorMessages.PasswordValidationError);
        }
    }
}
