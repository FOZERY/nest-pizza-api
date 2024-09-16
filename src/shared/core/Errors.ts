import { DomainError } from './DomainError';

export namespace Errors {
    export namespace General {
        export class AgainstNullOrUndefined extends DomainError {
            private constructor(valueName?: string) {
                super(400, `${valueName || `Значение`} не должно быть пустым.`);
            }

            public static create(valueName?: string) {
                return new AgainstNullOrUndefined(valueName);
            }
        }

        export class InvalidValueLength extends DomainError {
            private constructor(valueName: string) {
                super(400, `${valueName} имеет неверную длину.`);
            }

            public static create(valueName: string) {
                return new InvalidValueLength(valueName);
            }
        }

        export class InvalidFormat extends DomainError {
            private constructor(valueName: string) {
                super(400, `${valueName} имеет неверный формат.`);
            }

            public static create(valueName: string) {
                return new InvalidFormat(valueName);
            }
        }

        export class OutOfRange extends DomainError {
            private constructor(valueName: string, range: string) {
                super(
                    400,
                    `${valueName} находится вне допустимого диапазона (${range}).`,
                );
            }

            public static create(valueName: string, range: string) {
                return new OutOfRange(valueName, range);
            }
        }
    }
}
