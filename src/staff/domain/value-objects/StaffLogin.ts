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

    public static create(login: string): StaffLogin {
        if (
            login === null ||
            login === undefined ||
            login.length <= 4 ||
            login.length > 20
        ) {
            throw new Error(
                `Login shoul'd be more than 4 and less than 20 symbols`,
            );
        }

        return new StaffLogin({ value: login });
    }
}
