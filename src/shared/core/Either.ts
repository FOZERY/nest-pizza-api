export type Either<F, S> = Left<F, S> | Right<F, S>;

export class Left<F, S> {
    readonly value: F;

    constructor(value: F) {
        this.value = value;
    }

    isLeft(): this is Left<F, S> {
        return true;
    }

    isRight(): this is Right<F, S> {
        return false;
    }
}

export class Right<L, A> {
    readonly value: A;

    constructor(value: A) {
        this.value = value;
    }

    isLeft(): this is Left<L, A> {
        return false;
    }

    isRight(): this is Right<L, A> {
        return true;
    }
}

export const left = <F, S>(failure: F): Either<F, S> => {
    return new Left<F, S>(failure);
};

export const right = <F, S>(result: S): Either<F, S> => {
    return new Right<F, S>(result);
};
