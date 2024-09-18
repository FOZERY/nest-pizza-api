export class Guard {
    public static notNullOrUndefined(value: any): boolean {
        if (value === null || value === undefined) {
            return false;
        }

        return true;
    }

    public static notNullOrUndefinedCollection(args: Array<any>) {
        for (let arg of args) {
            if (!this.notNullOrUndefined(arg)) {
                return false;
            }
        }
        return true;
    }

    public static notEmpty(value: any): boolean {
        if (!this.notNullOrUndefined(value)) {
            return false;
        }

        if (typeof value === 'string' && value.trim() === '') {
            return false;
        }

        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return false;
        }

        if (Array.isArray(value) && value.length === 0) {
            return false;
        }

        return true;
    }

    public static notEmptyCollection(args: Array<any>): boolean {
        for (let arg of args) {
            if (!this.notEmpty(arg)) {
                return false;
            }
        }
        return true;
    }
}
