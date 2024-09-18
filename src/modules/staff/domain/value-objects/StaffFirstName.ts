import { Name } from '../../../shared/domain/ValueObjects/Name';

export interface StaffFirstNameProps {
    value: string;
}

export class StaffFirstName extends Name<StaffFirstNameProps> {
    private constructor(props: StaffFirstNameProps) {
        super(props);
    }

    public static create(name: string): StaffFirstName {
        if (name === null || name === undefined) {
            throw new Error('First Name is required');
        }

        if (!this.isValidLength(name)) {
            throw new Error(
                'First Name must not be less than two characters and more than 100',
            );
        }

        if (!this.isValidRussianName(name)) {
            throw new Error(
                'First Name should contain only russian characters',
            );
        }

        return new StaffFirstName({ value: name });
    }
}
