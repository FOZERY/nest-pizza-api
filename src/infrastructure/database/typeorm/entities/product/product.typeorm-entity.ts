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
import { ProductTypeTypeormEntity } from '../product-type/product-type.typeorm-entity';
import { RestaurantProductTypeormEntity } from '../restaurant-product/restaurant-product.typeorm-entity';
import { OrderProductTypeormEntity } from '../order-product/order-product.typeorm-entity';
import { ProductIngredientsTypeormEntity } from '../product-ingredient/product-ingredients.typeorm-entity';

@Entity('products')
export class ProductTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    name: string;

    @Column({
        nullable: true,
    })
    description: string;

    @Column({
        nullable: true,
    })
    imageUrl: string;

    @Column({
        default: 'false',
    })
    isInSlider: boolean;

    @Column()
    product_type_id: number;
    @ManyToOne(
        () => ProductTypeTypeormEntity,
        (productType) => productType.products,
    )
    @JoinColumn({ name: 'product_type_id' })
    product_type: ProductTypeTypeormEntity;

    @Column()
    restaurant_id: number;
    @OneToMany(
        () => RestaurantProductTypeormEntity,
        (restaurantProduct) => restaurantProduct.product,
    )
    @JoinColumn({ name: 'restaurant_id' })
    restaurantsProducts: RestaurantProductTypeormEntity[];

    @OneToMany(
        () => OrderProductTypeormEntity,
        (orderProduct) => orderProduct.product,
    )
    orderProducts: OrderProductTypeormEntity[];

    @OneToMany(
        () => ProductIngredientsTypeormEntity,
        (productIngredient) => productIngredient.product,
    )
    productIngredient: ProductIngredientsTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
