import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { ProductTypeormEntity } from '../product/product.typeorm-entity';
import { RestaurantTypeormEntity } from '../restaurant/restaurant.typeorm-entity';

@Entity('restaurants-products')
export class RestaurantProductTypeormEntity {
    @PrimaryColumn()
    product_id: number;

    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    availability: boolean;

    @Column()
    custom_price: number;

    @ManyToOne(
        () => ProductTypeormEntity,
        (product) => product.restaurantsProducts,
    )
    @JoinColumn({ name: 'product_id' })
    product: ProductTypeormEntity;

    @ManyToOne(
        () => RestaurantTypeormEntity,
        (restaurant) => restaurant.restaurantsProducts,
    )
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: RestaurantTypeormEntity;
}
