import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('staff_roles')
export class StaffRole {
    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column()
    value: string;

    @Column()
    description?: string;
}
