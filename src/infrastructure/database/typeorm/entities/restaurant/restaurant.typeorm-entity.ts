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
import { StaffTypeormEntity } from '../staff/staff.typeorm-entity';
import { RestaurantProductTypeormEntity } from '../restaurant-product/restaurant-product.typeorm-entity';
import { InventoryTypeormEntity } from '../inventory/inventory.typeorm-entity';
import { AddressTypeormEntity } from '../address/address.typeorm-entity';
import { OrderTypeormEntity } from '../order/order.typeorm-entity';

@Entity('restaurants')
export class RestaurantTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    opening_time: Date;

    @Column()
    closing_time: Date;

    @Column({
        length: 11,
    })
    phone_number: string;

    @Column()
    address_id: number;
    @ManyToOne(() => AddressTypeormEntity, (address) => address.restaurants)
    @JoinColumn({ name: 'address_id' })
    address: AddressTypeormEntity;

    @OneToMany(() => StaffTypeormEntity, (staff) => staff.restaurant)
    staff: StaffTypeormEntity[];

    @OneToMany(
        () => RestaurantProductTypeormEntity,
        (restaurantsProducts) => restaurantsProducts.restaurant,
    )
    restaurantsProducts: RestaurantProductTypeormEntity[];

    @OneToMany(
        () => InventoryTypeormEntity,
        (inventory) => inventory.restaurant,
    )
    inventories: InventoryTypeormEntity[];

    @OneToMany(() => OrderTypeormEntity, (order) => order.restaurant)
    orders: OrderTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
