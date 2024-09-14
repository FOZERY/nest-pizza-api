import { Entity } from '../../shared/domain/Entity';

export enum StaffPositionEnum {}

export interface StaffPositionProps {
    value: StaffPositionEnum;
    description?: string;
}

export class StaffPosition extends Entity<StaffPositionProps> {}
