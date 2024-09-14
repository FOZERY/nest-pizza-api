import { Phone } from './Phone';

describe('Phone ValueObject', () => {
    it('Должен создавать валидный номер телефона', () => {
        const phoneWithSeven = '79003002010';

        const phone = Phone.create(phoneWithSeven);

        expect(phone).toBeInstanceOf(Phone);
        expect(phone.value).toEqual('79003002010');

        const phoneWithPlusSeven = '+79003002010';
        const phone2 = Phone.create(phoneWithPlusSeven);

        expect(phone2.value).toEqual('79003002010');

        const phoneWithEight = '89003002010';
        const phone3 = Phone.create(phoneWithEight);

        expect(phone3.value).toEqual('79003002010');
    });

    it('Должен возвращать ошибку, если номер null или undefined', () => {
        // @ts-ignore
        expect(() => Phone.create(null)).toThrow();
        // @ts-ignore
        expect(() => Phone.create(undefined)).toThrow();
    });

    it('Должен возвращать телефон без пробелов', () => {
        const phone = Phone.create('    79003002010');
        expect(phone.value).toBe('79003002010');
    });

    it('Должен возвращать ошибку, если телефон не совпадает по формату', () => {
        expect(() => Phone.create('+371-523-32')).toThrow();

        expect(() => Phone.create('+89301002010')).toThrow();

        expect(() => Phone.create('790030010201')).toThrow();

        expect(() => Phone.create('9003002010')).toThrow();

        expect(() => Phone.create('')).toThrow();
    });
});
