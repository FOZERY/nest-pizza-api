import { StaffPassword } from './StaffPassword';
import { isEither } from '@sweet-monads/either';
import * as bcrypt from 'bcryptjs';
import { Errors } from '../../../shared/core/Errors';
import { StaffErrors } from '../errors/StaffErrors';

describe('StaffPassword', () => {
    it('Должен создавать валидный пароль', () => {
        const password = 'My_stronGpassword123';

        const staffPasswordOrFailure = StaffPassword.create(password);

        expect(isEither(staffPasswordOrFailure)).toBeTruthy();
        expect(staffPasswordOrFailure.isRight()).toBeTruthy();

        if (staffPasswordOrFailure.isRight()) {
            expect(staffPasswordOrFailure.value.password).toBe(password);
            expect(staffPasswordOrFailure.value.hashed).toBeFalsy();
        }
    });

    it('Должен возвращать захэшированный пароль', async () => {
        const password = 'My_stronGpassword123';
        const staffPasswordOrFailure = StaffPassword.create(password);

        expect(staffPasswordOrFailure.isRight()).toBeTruthy();

        if (staffPasswordOrFailure.isRight()) {
            const staffPasswordHashedOrFailure =
                await staffPasswordOrFailure.value.getHashedValue();

            expect(staffPasswordHashedOrFailure.isRight()).toBeTruthy();

            if (staffPasswordHashedOrFailure.isRight()) {
                const hashedPassword = staffPasswordHashedOrFailure.value;

                const isMatch = await bcrypt.compare(password, hashedPassword);

                expect(isMatch).toBeTruthy();
            }
        }
    });

    it('Должен ставить флаг hashed в true', async () => {
        const password = 'My_stronGpassword123';
        const staffPasswordOrFailure = StaffPassword.create(password, true);

        expect(staffPasswordOrFailure.isRight()).toBeTruthy();

        if (staffPasswordOrFailure.isRight()) {
            expect(staffPasswordOrFailure.value.hashed).toBeTruthy();
        }
    });

    it('Должен возвращать Right, если пароль меньше 6 символов', () => {
        const password = 'pas';

        const staffPasswordOrFailure = StaffPassword.create(password);

        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();

        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                Errors.General.InvalidValueLength,
            );
        }
    });

    it('Должен выбрасывать ошибку, если пароль больше 100 символов', () => {
        const password = 'p'.repeat(101);

        const staffPasswordOrFailure = StaffPassword.create(password);

        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();

        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                Errors.General.InvalidValueLength,
            );
        }
    });

    it('Должен возвращать пароль без пробелов', () => {
        const password = '   Dwsad_1232ds';

        const staffPasswordOrFailure = StaffPassword.create(password);

        expect(staffPasswordOrFailure.isRight()).toBeTruthy();

        if (staffPasswordOrFailure.isRight()) {
            expect(staffPasswordOrFailure.value.password).toBe(password.trim());
        }
    });

    it('Должен выбрасывать ошибку в случае, если передан null или undefined', () => {
        const passwordNull = null;
        // @ts-ignore
        let staffPasswordOrFailure = StaffPassword.create(passwordNull);
        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();
        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                Errors.General.AgainstNullOrUndefined,
            );
        }

        const passwordUndefined = undefined;
        // @ts-ignore
        staffPasswordOrFailure = StaffPassword.create(passwordUndefined);
        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();
        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                Errors.General.AgainstNullOrUndefined,
            );
        }
    });

    it('Должен выбрасывать ошибку в случае, если пароль написан не латинскими буквами', () => {
        const password = 'РусскийПароль_123';
        const staffPasswordOrFailure = StaffPassword.create(password);
        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();

        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                StaffErrors.NotLatinCharactersError,
            );
        }
    });

    it('Должен выбрасывать ошибку в случае, если пароль не проходит валидацию на строгость', () => {
        const password = 'password';

        const staffPasswordOrFailure = StaffPassword.create(password);
        expect(staffPasswordOrFailure.isLeft()).toBeTruthy();

        if (staffPasswordOrFailure.isLeft()) {
            expect(staffPasswordOrFailure.value).toBeInstanceOf(
                StaffErrors.WeakPasswordError,
            );
        }
    });
});
