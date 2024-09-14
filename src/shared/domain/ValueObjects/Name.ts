import { upperFirst } from 'lodash';
import { ValueObject } from '../ValueObject';

export enum NameValidateErrors {
    RequiredError = 'Имя должно быть задано',
    LengthError = 'Имя должно быть не меньше чем 2 символа и не больше чем 100 символов',
    RussianSymbolsError = 'Имя должно состоять только из русских букв',
}

export interface NameProps {
    value: string;
}

export class Name<TProps extends NameProps> extends ValueObject<TProps> {
    protected static minLength: number = 2;
    protected static maxLength: number = 100;

    get value(): string {
        return this.props.value;
    }

    protected constructor(props: TProps) {
        super(props);
    }

    protected static isValidLength(name: string): boolean {
        return name.length >= this.minLength && name.length <= this.maxLength;
    }

    protected static isValidRussianName(name: string): boolean {
        const russianRegex = /^[А-ЯЁа-яё]+$/;
        return russianRegex.test(name);
    }

    public static create(name: string) {
        if (name === null || name === undefined) {
            throw new Error(NameValidateErrors.RequiredError);
        }

        if (!this.isValidLength(name)) {
            throw new Error(NameValidateErrors.LengthError);
        }

        if (!this.isValidRussianName(name)) {
            throw new Error(NameValidateErrors.RussianSymbolsError);
        }

        return new Name({ value: upperFirst(name.trim().toLowerCase()) });
    }
}
