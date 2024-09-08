import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { StaffTypeormEntity } from '../staff/staff.typeorm-entity';
import { PermissionTypeormEntity } from '../permission/permission.typeorm-entity';

@Entity('staff-roles')
export class StaffRoleTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => StaffTypeormEntity, (staff) => staff.role)
    staff: StaffTypeormEntity[];

    @ManyToMany(() => PermissionTypeormEntity)
    @JoinTable({
        name: 'staff_roles_permissions',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        },
    })
    permissions: PermissionTypeormEntity[];
}
