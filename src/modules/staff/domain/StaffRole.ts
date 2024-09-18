import { Either, left, right } from '@sweet-monads/either';
import { Guard } from 'src/shared/core/Guard';
import { Entity } from 'src/shared/domain/Entity';
import { GeneralErrors } from 'src/shared/domain/GeneralErrors';
import { UniqueID } from 'src/shared/domain/UniqueID';
import { Permission } from './Permission';

export enum StaffRoleEnum {}

export interface StaffRoleProps {
    value: StaffRoleEnum;
    description?: string;
    permissions: Permission[];
}

export type StaffRoleID = UniqueID;

export class StaffRole extends Entity<StaffRoleProps> {
    public get permissions(): Permission[] {
        return this.props.permissions;
    }

    public get value(): StaffRoleEnum {
        return this.props.value;
    }

    public get description(): string | undefined {
        return this.props.description;
    }

    private constructor(props: StaffRoleProps, id?: StaffRoleID) {
        super(props, id);
    }

    public static create(
        props: StaffRoleProps,
        id?: StaffRoleID,
    ): Either<GeneralErrors.NullOrUndefinedValue, StaffRole> {
        if (Guard.notNullOrUndefined(props)) {
            return left(
                GeneralErrors.NullOrUndefinedValue.create('staffRole props'),
            );
        }
        return right(new StaffRole(props, id));
    }

    public addPermission(permission: Permission) {
        this.props.permissions.push(permission);
    }
}
