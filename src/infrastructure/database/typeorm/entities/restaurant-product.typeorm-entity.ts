import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductTypeormEntity } from './product.typeorm-entity';
import { RestaurantTypeormEntity } from './restaurant.typeorm-entity';

@Entity('restaurants-products')
export class RestaurantProductTypeormEntity {
    @PrimaryColumn()
    productId: number;

    @PrimaryColumn()
    restaurantId: number;

    @Column()
    availability: boolean;

    @Column()
    custom_price: number;

    @ManyToOne(
        () => ProductTypeormEntity,
        (product) => product.restaurantsProducts,
    )
    product: ProductTypeormEntity;

    @ManyToOne(
        () => RestaurantTypeormEntity,
        (restaurant) => restaurant.restaurantsProducts,
    )
    restaurant: RestaurantTypeormEntity;
}
