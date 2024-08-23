import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { RestaurantProductTypeormEntity } from './restaurant-product.typeorm-entity';
import { OrderProductTypeormEntity } from './order-product.typeorm-entity';
import { ProductTypeTypeormEntity } from './product-type.typeorm-entity';
import { ProductIngredientsTypeormEntity } from './product-ingredients.typeorm-entity';

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
    description?: string;

    @Column({
        nullable: true,
    })
    imageUrl?: string;

    @Column({
        default: 'false',
    })
    isInSlider: boolean;

    @ManyToOne(
        () => ProductTypeTypeormEntity,
        (productType) => productType.products,
    )
    product_type: ProductTypeTypeormEntity;

    @OneToMany(
        () => RestaurantProductTypeormEntity,
        (restaurantProduct) => restaurantProduct.product,
    )
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
