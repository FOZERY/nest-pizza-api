import { PasswordErrors, StaffPassword } from './StaffPassword';
import * as bcrypt from 'bcryptjs';

describe('StaffPassword', () => {
    it('Должен создавать валидный пароль', () => {
        const password = 'My_stronGpassword123';

        const staffPassword = StaffPassword.create({ value: password });

        expect(staffPassword).toBeInstanceOf(StaffPassword);
        expect(staffPassword.value).toBe(password);
        expect(staffPassword['props'].hashed).toBe(false);
    });

    it('Должен возвращать захэшированный пароль', async () => {
        const password = 'My_stronGpassword123';

        const staffPassword = StaffPassword.create({ value: password });

        expect(
            await bcrypt.compare(
                password,
                await staffPassword.getHashedValue(),
            ),
        ).toBe(true);
    });

    it('Должен ставить флаг hashed в true', async () => {
        const hashedPassword = await bcrypt.hash('password', 10);
        const staffPassword = StaffPassword.create({
            value: hashedPassword,
            hashed: true,
        });

        expect(staffPassword['props'].hashed).toBe(true);
    });

    it('Должен выбрасывать ошибку, если пароль меньше 6 символов', () => {
        expect(() => StaffPassword.create({ value: '' })).toThrow();
    });

    it('Должен выбрасывать ошибку, если пароль больше 100 символов', () => {
        expect(() =>
            StaffPassword.create({ value: 'P'.repeat(101) }),
        ).toThrow();
    });

    it('Должен выбрасывать ошибку в случае, если пароль имеет повторения символов', () => {
        expect(() =>
            StaffPassword.create({ value: 'Strong_132_Passwordddddd' }),
        ).toThrow();
    });

    it('Должен возвращать пароль без пробелов', () => {
        const staffPassword = StaffPassword.create({
            value: ' Paswword_21Sd2          ',
        });

        expect(staffPassword.value).toBe('Paswword_21Sd2');
    });

    it('Должен выбрасывать ошибку в случае, если передан null или undefined', () => {
        //@ts-ignore
        expect(() => StaffPassword.create(null)).toThrow();
        //@ts-ignore
        expect(() => StaffPassword.create(undefined)).toThrow();
        //@ts-ignore
        expect(() => StaffPassword.create({ value: null })).toThrow();
        //@ts-ignore
        expect(() => StaffPassword.create({ value: undefined })).toThrow();
    });

    it('Должен выбрасывать ошибку в случае, если пароль написан не латинскими буквами', () => {
        expect(() => StaffPassword.create({ value: 'пароль' })).toThrow();
    });

    it('Должен выбрасывать ошибку в случае, если пароль не проходит валидацию на строгость', () => {
        const errorMessage = PasswordErrors.StrongPasswordCheck;

        expect(() => StaffPassword.create({ value: 'password' })).toThrow();
        expect(() => StaffPassword.create({ value: '12345' })).toThrow();
        expect(() =>
            StaffPassword.create({ value: 'password_12345' }),
        ).toThrow();
    });
});
