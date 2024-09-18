import { Guard } from './Guard';

describe('Guard', () => {
    describe('notEmpty method', () => {
        it('Должен возвращать true для непустых значений', () => {
            expect(Guard.notEmpty(123)).toBeTruthy();
            expect(Guard.notEmpty('123')).toBeTruthy();
            expect(Guard.notEmpty({ x: '321' })).toBeTruthy();
            expect(Guard.notEmpty([1, 2, 3])).toBeTruthy();
        });

        it('Должен возврашать false для пустых значений', () => {
            expect(Guard.notEmpty('')).toBeFalsy();
            expect(Guard.notEmpty('    ')).toBeFalsy();
            expect(Guard.notEmpty({})).toBeFalsy();
            expect(Guard.notEmpty([])).toBeFalsy();
            expect(Guard.notEmpty(null)).toBeFalsy();
            expect(Guard.notEmpty(undefined)).toBeFalsy();
        });
    });

    describe('notEmptyCollection', () => {
        it('Должен возвращать true для непустых значений', () => {
            expect(Guard.notEmptyCollection([123, 20, 30])).toBeTruthy();
            expect(Guard.notEmptyCollection(['123', 'null', 'a'])).toBeTruthy();
            expect(
                Guard.notEmptyCollection([{ x: '321' }, { y: '321' }]),
            ).toBeTruthy();
            expect(
                Guard.notEmptyCollection([
                    [1, 2, 3],
                    [2, 5, 3],
                ]),
            ).toBeTruthy();
        });

        it('Должен возврашать false для пустых значений', () => {
            expect(Guard.notEmptyCollection(['', '321'])).toBeFalsy();
            expect(Guard.notEmptyCollection(['    ', 'abc', ''])).toBeFalsy();
            expect(Guard.notEmptyCollection([{ x: 3 }, {}])).toBeFalsy();
            expect(Guard.notEmptyCollection([[1, 2, 3], []])).toBeFalsy();
            expect(Guard.notEmptyCollection(['x', null])).toBeFalsy();
            expect(Guard.notEmptyCollection([[1], undefined])).toBeFalsy();
        });
    });

    describe('notNullOrUndefined', () => {
        it('Должен возвращать true', () => {
            expect(Guard.notNullOrUndefined({})).toBeTruthy();
            expect(Guard.notNullOrUndefined('')).toBeTruthy();
            expect(Guard.notNullOrUndefined([])).toBeTruthy();
            expect(Guard.notNullOrUndefined(123)).toBeTruthy();
            expect(Guard.notNullOrUndefined(false)).toBeTruthy();
        });

        it('Должен возвращать false', () => {
            expect(Guard.notNullOrUndefined(null)).toBeFalsy();
            expect(Guard.notNullOrUndefined(undefined)).toBeFalsy();
        });
    });

    describe('notNullOrUndefinedCollection', () => {
        it('Должен возвращать true', () => {
            expect(Guard.notNullOrUndefinedCollection([1, 2, 3])).toBeTruthy();
            expect(Guard.notNullOrUndefined(['', '', ''])).toBeTruthy();
            expect(Guard.notNullOrUndefined([[], [], []])).toBeTruthy();
            expect(
                Guard.notNullOrUndefined([false, false, false]),
            ).toBeTruthy();
            expect(Guard.notNullOrUndefined([{}, {}, {}])).toBeTruthy();
        });

        it('Должен возвращать false', () => {
            expect(
                Guard.notNullOrUndefinedCollection([null, 1, 2]),
            ).toBeFalsy();
            expect(
                Guard.notNullOrUndefinedCollection([{}, undefined]),
            ).toBeFalsy();
        });
    });
});
