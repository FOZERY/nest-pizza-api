import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { OrderTypeormEntity } from '../order/order.typeorm-entity';
import { ProductTypeormEntity } from '../product/product.typeorm-entity';

@Entity('orders-products')
export class OrderProductTypeormEntity {
    @PrimaryColumn()
    order_id: number;

    @PrimaryColumn()
    product_id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => OrderTypeormEntity, (order) => order.orderProducts)
    @JoinColumn({ name: 'order_id' })
    order: OrderTypeormEntity;

    @ManyToOne(() => ProductTypeormEntity, (product) => product.orderProducts)
    @JoinColumn({ name: 'product_id' })
    product: ProductTypeormEntity;
}
