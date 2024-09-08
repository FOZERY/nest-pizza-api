import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { OrderTypeormEntity } from '../order/order.typeorm-entity';
import { RestaurantTypeormEntity } from '../restaurant/restaurant.typeorm-entity';
import { StaffPositionTypeormEntity } from '../staff-position/staff-position.typeorm-entity';
import { StaffRoleTypeormEntity } from '../staff-role/staff-role.typeorm-entity';

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

    @Column()
    role_id: number;
    @ManyToOne(() => StaffRoleTypeormEntity, (staffRoles) => staffRoles.staff)
    @JoinColumn({ name: 'role_id' })
    role: StaffRoleTypeormEntity;

    @Column()
    restaurant_id: number;
    @ManyToOne(() => RestaurantTypeormEntity, (restaurant) => restaurant.staff)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: RestaurantTypeormEntity;

    @Column()
    staff_position_id: number;
    @ManyToOne(
        () => StaffPositionTypeormEntity,
        (staffPosition) => staffPosition.staff,
    )
    @JoinColumn({ name: 'staff_position_id' })
    position: StaffPositionTypeormEntity;

    @OneToMany(() => OrderTypeormEntity, (order) => order.cashier)
    cashierOrders: OrderTypeormEntity[];

    @OneToMany(() => OrderTypeormEntity, (order) => order.courier)
    courierOrders: OrderTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
