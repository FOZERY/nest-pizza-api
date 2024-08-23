import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permissions')
export class PermissionTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column({ nullable: true })
    description?: string;
}
