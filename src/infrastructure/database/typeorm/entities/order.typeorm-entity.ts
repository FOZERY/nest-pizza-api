import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserTypeormEntity } from './user.typeorm-entity';

import { AddressTypeormEntity } from './address.typeorm-entity';
import { StaffTypeormEntity } from './staff.typeorm-entity';
import { OrderProductTypeormEntity } from './order-product.typeorm-entity';
import { OrderStatusTypeormEntity } from './order-status.typeorm-entity';
import { OrderTypeTypeormEntity } from './order-type.typeorm-entity';
import { RestaurantTypeormEntity } from './restaurant.typeorm-entity';
import { Nullable } from '../../../../domain/common/common.types';

@Entity('orders')
export class OrderTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_time: Date;

    @Column()
    order_price: number;

    @ManyToOne(
        () => OrderStatusTypeormEntity,
        (orderStatus) => orderStatus.orders,
    )
    order_status: OrderStatusTypeormEntity;

    @ManyToOne(() => OrderTypeTypeormEntity, (orderType) => orderType.orders)
    order_type: OrderTypeTypeormEntity;

    @Column({
        nullable: true,
    })
    delivery_requested_time: Date;

    @Column({
        nullable: true,
    })
    delivery_actual_time: Date;

    @Column({
        nullable: true,
    })
    delivery_price: number;

    @ManyToOne(() => RestaurantTypeormEntity, (restaurant) => restaurant.orders)
    restaurant: RestaurantTypeormEntity;

    @ManyToOne(() => AddressTypeormEntity, (address) => address.orders, {
        nullable: true,
    })
    delivery_address: AddressTypeormEntity;

    @ManyToOne(() => UserTypeormEntity, (user) => user.orders, {
        nullable: true,
    })
    user: UserTypeormEntity;

    @ManyToOne(() => StaffTypeormEntity, (staff) => staff.cashierOrders, {
        nullable: true,
    })
    cashier: StaffTypeormEntity;

    @ManyToOne(() => StaffTypeormEntity, (staff) => staff.courierOrders, {
        nullable: true,
    })
    courier: StaffTypeormEntity;

    @OneToMany(
        () => OrderProductTypeormEntity,
        (orderProduct) => orderProduct.order,
    )
    orderProducts: OrderProductTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
