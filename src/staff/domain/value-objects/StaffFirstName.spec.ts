import { StaffFirstName } from './StaffFirstName';

describe('StaffFirstName Value Object', () => {
    it('should create a valid StaffFirstName', () => {
        const name = 'Иван';
        const staffFirstName = StaffFirstName.create(name);

        expect(staffFirstName).toBeInstanceOf(StaffFirstName);
        expect(staffFirstName.value).toBe(name);
    });

    it('should throw an error if the name is null or undefined', () => {
        const errorMessage = 'First Name is required';

        // @ts-ignore
        expect(() => StaffFirstName.create(null)).toThrow(errorMessage);
        // @ts-ignore
        expect(() => StaffFirstName.create(undefined)).toThrow(errorMessage);
    });

    it('should throw an error if the name is shorter than 2 characters', () => {
        expect(() => StaffFirstName.create('А')).toThrow(
            'First Name must not be less than two characters and more than 100',
        );
    });

    it('should throw an error if the name is longer than 100 characters', () => {
        const longName = 'И'.repeat(101);

        expect(() => StaffFirstName.create(longName)).toThrow(
            'First Name must not be less than two characters and more than 100',
        );
    });

    it('should throw an error if the name is not contain russian symbols', () => {
        const errorMessage =
            'First Name should contain only russian characters';

        expect(() => StaffFirstName.create('John')).toThrow(errorMessage);
        expect(() => StaffFirstName.create('Joвлы')).toThrow(errorMessage);
        expect(() => StaffFirstName.create('Иван123')).toThrow(errorMessage);
    });
});
