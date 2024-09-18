import { Either, right } from '@sweet-monads/either';
import { Entity } from 'src/shared/domain/Entity';

export enum StaffPositionEnum {}

export interface StaffPositionProps {
    value: StaffPositionEnum;
    description?: string;
}

export class StaffPosition extends Entity<StaffPositionProps> {
    public get value(): StaffPositionEnum {
        return this.props.value;
    }

    public get description(): string | undefined {
        return this.props.description;
    }

    private constructor(props: StaffPositionProps, id?: StaffPositionID) {
        super(props, id);
    }

    public static create(
        props: StaffPositionProps,
        id?: StaffPositionID,
    ): Either<any, StaffPosition> {
        return right(new StaffPosition(props, id));
    }
}
