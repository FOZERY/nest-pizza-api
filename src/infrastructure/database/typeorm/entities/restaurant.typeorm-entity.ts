import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { StaffTypeormEntity } from './staff.typeorm-entity';
import { AddressTypeormEntity } from './address.typeorm-entity';
import { RestaurantProductTypeormEntity } from './restaurant-product.typeorm-entity';
import { InventoryTypeormEntity } from './inventory.typeorm-entity';

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

    @ManyToOne(() => AddressTypeormEntity, (address) => address.restaurants)
    address: AddressTypeormEntity;

    @OneToMany(() => StaffTypeormEntity, (staff) => staff.restaurant, {
        nullable: true,
    })
    staff?: StaffTypeormEntity[];

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
