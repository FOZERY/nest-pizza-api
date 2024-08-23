import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InventoryTypeormEntity } from './inventory.typeorm-entity';
import { ProductIngredientsTypeormEntity } from './product-ingredients.typeorm-entity';

@Entity('ingredients')
export class IngredientTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    unit: string;

    @OneToMany(
        () => InventoryTypeormEntity,
        (inventory) => inventory.ingredient,
    )
    inventories: InventoryTypeormEntity[];

    @OneToMany(
        () => ProductIngredientsTypeormEntity,
        (productIngredient) => productIngredient.ingredient,
    )
    productIngredient: ProductIngredientsTypeormEntity[];
}
