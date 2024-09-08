import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { IngredientTypeormEntity } from '../ingredient/ingredient.typeorm-entity';
import { ProductTypeormEntity } from '../product/product.typeorm-entity';

@Entity('product-ingredients')
export class ProductIngredientsTypeormEntity {
    @PrimaryColumn()
    ingredient_id: number;

    @PrimaryColumn()
    product_id: number;

    @Column()
    quantity: number;

    @ManyToOne(
        () => IngredientTypeormEntity,
        (ingredient) => ingredient.productIngredient,
    )
    @JoinColumn({ name: 'ingredient_id' })
    ingredient: IngredientTypeormEntity;

    @ManyToOne(
        () => ProductTypeormEntity,
        (product) => product.productIngredient,
    )
    @JoinColumn({ name: 'product_id' })
    product: ProductTypeormEntity;
}
