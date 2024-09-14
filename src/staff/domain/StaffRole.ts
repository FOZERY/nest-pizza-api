import { Entity } from '../../shared/domain/Entity';

export enum StaffRoleEnum {}

export interface StaffRoleProps {
    value: StaffRoleEnum;
    description?: string;
}

export class StaffRole extends Entity<StaffRoleProps> {}
