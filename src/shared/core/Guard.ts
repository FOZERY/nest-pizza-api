export class Guard {
    public static notNullOrUndefined(value: any, valueName: string): boolean {
        if (value === null || value === undefined) {
            return false;
        }

        return true;
    }
}
