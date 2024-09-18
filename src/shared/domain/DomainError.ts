import { HttpStatusCode } from './enums/HttpStatusCode';

export abstract class DomainError extends Error {
    public name: string;
    public httpErrorCode: HttpStatusCode;
    public message: string;
    public payload?: Record<string, any>;

    protected constructor(
        httpErrorCode: HttpStatusCode,
        message: string,
        payload?: Record<string, any>,
    ) {
        super(message);
        this.httpErrorCode = httpErrorCode;
        this.message = message;
        this.payload = payload;

        this.name = this.constructor.name;
    }
}
