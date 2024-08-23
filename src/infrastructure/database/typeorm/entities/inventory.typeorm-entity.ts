import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { RestaurantTypeormEntity } from './restaurant.typeorm-entity';
import { IngredientTypeormEntity } from './ingredient.typeorm-entity';

@Entity('inventory')
export class InventoryTypeormEntity {
    @PrimaryColumn()
    restaurantId: number;

    @PrimaryColumn()
    ingredientId: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    quantity: number;

    @ManyToOne(
        () => RestaurantTypeormEntity,
        (restaurant) => restaurant.inventories,
    )
    restaurant: RestaurantTypeormEntity;

    @ManyToOne(
        () => IngredientTypeormEntity,
        (ingredient) => ingredient.inventories,
    )
    ingredient: IngredientTypeormEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
