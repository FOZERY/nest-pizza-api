import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { RestaurantTypeormEntity } from '../restaurant/restaurant.typeorm-entity';
import { IngredientTypeormEntity } from '../ingredient/ingredient.typeorm-entity';

@Entity('inventory')
export class InventoryTypeormEntity {
    @PrimaryColumn()
    restaurantId: number;

    @PrimaryColumn()
    ingredientId: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    quantity: number;

    @Column()
    restaurant_id: number;
    @ManyToOne(
        () => RestaurantTypeormEntity,
        (restaurant) => restaurant.inventories,
    )
    @JoinTable({ name: 'restaurant_id' })
    restaurant: RestaurantTypeormEntity;

    @Column()
    ingredient_id: number;
    @ManyToOne(
        () => IngredientTypeormEntity,
        (ingredient) => ingredient.inventories,
    )
    @JoinTable({ name: 'ingredient_id' })
    ingredient: IngredientTypeormEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
