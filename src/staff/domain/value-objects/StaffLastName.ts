import { Name } from '../../../shared/domain/ValueObjects/Name';

export interface StaffLastNameProps {
    value: string;
}

export class StaffLastName extends Name<StaffLastNameProps> {
    private constructor(props: StaffLastNameProps) {
        super(props);
    }

    public static create(name: string): StaffLastName {
        if (name === null || name === undefined) {
            throw new Error('Last Name is required');
        }

        if (!this.isValidLength(name)) {
            throw new Error(
                'Last Name must not be less than two characters and more than 100',
            );
        }

        if (!this.isValidRussianName(name)) {
            throw new Error('Last Name should contain only russian characters');
        }

        return new StaffLastName({ value: name });
    }
}
