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

@Entity('staff')
export class StaffTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

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
