import { DomainError } from './DomainError';
import { HttpStatusCode } from './enums/HttpStatusCode';

export namespace GeneralErrors {
    export class ValidationError extends DomainError {
        constructor(message: string, payload?: Record<string, any>) {
            super(HttpStatusCode.BAD_REQUEST, message, payload);
        }
    }

    export class NullOrUndefinedError extends DomainError {
        constructor(message: string, payload?: Record<string, any>) {
            super(HttpStatusCode.BAD_REQUEST, message, payload);
        }
    }

    export class NotFoundError extends DomainError {
        constructor(message: string, payload?: Record<string, any>) {
            super(HttpStatusCode.NOT_FOUND, message, payload);
        }
    }

    export class UnexpectedError extends DomainError {
        constructor() {
            super(
                HttpStatusCode.INTERNAL_SERVER_ERROR,
                'Произошла непредвиденная ошибка',
            );
        }
    }
}
