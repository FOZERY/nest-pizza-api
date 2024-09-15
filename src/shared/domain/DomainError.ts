export interface DomainError<ErrorType> {
    message: string;
    error?: ErrorType;
}
