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
import { OrderStatusTypeormEntity } from '../order-status/order-status.typeorm-entity';
import { OrderTypeTypeormEntity } from '../order-type/order-type.typeorm-entity';
import { RestaurantTypeormEntity } from '../restaurant/restaurant.typeorm-entity';
import { AddressTypeormEntity } from '../address/address.typeorm-entity';
import { UserTypeormEntity } from '../user/user.typeorm-entity';
import { StaffTypeormEntity } from '../staff/staff.typeorm-entity';
import { OrderProductTypeormEntity } from '../order-product/order-product.typeorm-entity';

@Entity('orders')
export class OrderTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_time: Date;

    @Column()
    order_price: number;

    @Column()
    order_status_id: number;
    @ManyToOne(
        () => OrderStatusTypeormEntity,
        (orderStatus) => orderStatus.orders,
    )
    @JoinColumn({ name: 'order_status_id' })
    order_status: OrderStatusTypeormEntity;

    @Column()
    order_type_id: number;
    @ManyToOne(() => OrderTypeTypeormEntity, (orderType) => orderType.orders)
    @JoinColumn({ name: 'order_type_id' })
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

    @Column()
    restaurant_id: number;
    @ManyToOne(() => RestaurantTypeormEntity, (restaurant) => restaurant.orders)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: RestaurantTypeormEntity;

    @Column()
    delivery_address_id: number;
    @ManyToOne(() => AddressTypeormEntity, (address) => address.orders)
    @JoinColumn({ name: 'delivery_address_id' })
    delivery_address: AddressTypeormEntity;

    @Column()
    user_id: number;
    @ManyToOne(() => UserTypeormEntity, (user) => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: UserTypeormEntity;

    @Column()
    cashier_id: number;
    @ManyToOne(() => StaffTypeormEntity, (staff) => staff.cashierOrders)
    @JoinColumn({ name: 'cashier_id' })
    cashier: StaffTypeormEntity;

    @Column()
    courier_id: number;
    @ManyToOne(() => StaffTypeormEntity, (staff) => staff.courierOrders)
    @JoinColumn({ name: 'courier_id' })
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
