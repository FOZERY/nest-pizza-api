import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductTypeormEntity } from '../product/product.typeorm-entity';

@Entity('product-types')
export class ProductTypeTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @OneToMany(() => ProductTypeormEntity, (product) => product.product_type)
    products: ProductTypeormEntity[];
}
