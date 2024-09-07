import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StaffTypeormEntity } from './staff.typeorm-entity';

@Entity('staff-positions')
export class StaffPositionTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    description: string;

    @OneToMany(() => StaffTypeormEntity, (staff) => staff.position)
    staff: StaffTypeormEntity[];
}
