import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { OrderTypeormEntity } from './order.typeorm-entity';
import { ProductTypeormEntity } from './product.typeorm-entity';

@Entity('orders-products')
export class OrderProductTypeormEntity {
    @PrimaryColumn()
    orderId: number;

    @PrimaryColumn()
    productId: number;

    @Column()
    quantity: number;

    @ManyToOne(() => OrderTypeormEntity, (order) => order.orderProducts)
    order: OrderTypeormEntity;

    @ManyToOne(() => ProductTypeormEntity, (product) => product.orderProducts)
    product: ProductTypeormEntity;
}
