import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('staff')
export class StaffEntity {
    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column({ length: 100 })
    login: string;

    @Column({ length: 100 })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    patronymic?: string;

    @Column({ length: 11 })
    phone_number: string;
}
