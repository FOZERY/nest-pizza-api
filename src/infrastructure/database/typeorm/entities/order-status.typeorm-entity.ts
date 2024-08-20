import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderTypeormEntity } from './order.typeorm-entity';
@Entity('order-statuses')
export class OrderStatusTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    value: string;
    @OneToMany(() => OrderTypeormEntity, (order) => order.order_status)
    orders: OrderTypeormEntity[];
}
