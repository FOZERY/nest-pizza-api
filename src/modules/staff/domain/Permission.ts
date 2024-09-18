import { Either, left, right } from '@sweet-monads/either';
import { Guard } from 'src/shared/core/Guard';
import { Entity } from 'src/shared/domain/Entity';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { UniqueID } from 'src/shared/domain/UniqueID';

export interface PermissionProps {
    value: string;
    description?: string;
}

export type PermissionID = UniqueID;

export class Permission extends Entity<PermissionProps> {
    public get value() {
        return this.props.value;
    }

    public get description() {
        return this.props.description;
    }

    private constructor(props: PermissionProps, id?: PermissionID) {
        super(props, id);
    }

    public static create(
        props: PermissionProps,
        id?: PermissionID,
    ): Either<GeneralErrors.NullOrUndefinedValue, Permission> {
        if (Guard.notNullOrUndefined(props)) {
            return left(
                GeneralErrors.NullOrUndefinedValue.create('permission props'),
            );
        }

        return right(new Permission(props, id));
    }
}
