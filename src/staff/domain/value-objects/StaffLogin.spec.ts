import { StaffLogin } from './StaffLogin';

describe('StaffLogin Value Object', () => {
    it('should create a valid StaffLogin', () => {
        const login = 'my_login213';

        const staffLogin = StaffLogin.create(login);

        expect(staffLogin).toBeInstanceOf(StaffLogin);
        expect(staffLogin.value).toBe(login);
    });

    it('should throw an error if the name is null or undefined', () => {
        //@ts-ignore
        expect(() => StaffLogin.create(undefined)).toThrow();
        //@ts-ignore
        expect(() => StaffLogin.create(null)).toThrow();
    });

    it('Должна быть ошибка если логин содержит не латинские буквы', () => {
        expect(() => StaffLogin.create('Логин')).toThrow();
    });

    it('Должна быть ошибка, если логин содержит меньше 6 символов и больше 100', () => {
        expect(() => StaffLogin.create('Lo')).toThrow();
        expect(() => StaffLogin.create('L'.repeat(101))).toThrow();
    });

    it('Должна быть ошибка, если логин содержит специальные символы', () => {
        expect(() => StaffLogin.create('&%*#1Loa')).toThrow();
    });
});
