import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { StaffPositionTypeormEntity } from './staff-position.typeorm-entity';
import { RestaurantTypeormEntity } from './restaurant.typeorm-entity';
import { OrderTypeormEntity } from './order.typeorm-entity';
import { StaffRoleTypeormEntity } from './staff-role.typeorm-entity';

@Entity('staff')
export class StaffTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        nullable: true,
    })
    patronymic?: string;

    @Column({
        nullable: true,
    })
    info?: string;

    @Column({
        length: 11,
    })
    phone_number: string;

    @ManyToOne(() => StaffRoleTypeormEntity, (staffRoles) => staffRoles.staff)
    role: StaffRoleTypeormEntity;

    @ManyToOne(() => RestaurantTypeormEntity, (restaurant) => restaurant.staff)
    restaurant: RestaurantTypeormEntity;

    @ManyToOne(
        () => StaffPositionTypeormEntity,
        (staffPosition) => staffPosition.staff,
    )
    position: StaffPositionTypeormEntity;

    @OneToMany(() => OrderTypeormEntity, (order) => order.cashier, {
        nullable: true,
    })
    cashierOrders?: OrderTypeormEntity[];

    @OneToMany(() => OrderTypeormEntity, (order) => order.courier, {
        nullable: true,
    })
    courierOrders?: OrderTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
