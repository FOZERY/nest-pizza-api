import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { OrderTypeormEntity } from './order.typeorm-entity';
import { RestaurantTypeormEntity } from './restaurant.typeorm-entity';

@Entity('addresses')
export class AddressTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    region: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;

    @Column()
    postalCode: string;

    @Column({
        nullable: true,
    })
    apartment?: string;

    @Column({
        nullable: true,
    })
    block?: string;

    @OneToMany(() => OrderTypeormEntity, (order) => order.delivery_address, {
        nullable: true,
    })
    orders?: OrderTypeormEntity[];

    @OneToMany(
        () => RestaurantTypeormEntity,
        (restaurant) => restaurant.address,
        { nullable: true },
    )
    restaurants?: RestaurantTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
