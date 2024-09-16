import { DomainError } from '../../../shared/core/DomainError';

export namespace StaffErrors {
    export class WeakPasswordError extends DomainError {
        private constructor() {
            super(400, `Слабый пароль`);
        }

        public static create() {
            return new WeakPasswordError();
        }
    }

    export class NotLatinCharactersError extends DomainError {
        private constructor() {
            super(400, `Пароль должен состоять только из латинского алфавита.`);
        }

        public static create() {
            return new NotLatinCharactersError();
        }
    }
}
