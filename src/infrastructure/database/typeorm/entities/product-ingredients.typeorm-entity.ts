import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { IngredientTypeormEntity } from './ingredient.typeorm-entity';
import { ProductTypeormEntity } from './product.typeorm-entity';

@Entity('product-ingredients')
export class ProductIngredientsTypeormEntity {
    @PrimaryColumn()
    ingredientId: number;

    @PrimaryColumn()
    productId: number;

    @Column()
    quantity: number;

    @ManyToOne(
        () => IngredientTypeormEntity,
        (ingredient) => ingredient.productIngredient,
    )
    ingredient: IngredientTypeormEntity;

    @ManyToOne(
        () => ProductTypeormEntity,
        (product) => product.productIngredient,
    )
    product: ProductTypeormEntity;
}
