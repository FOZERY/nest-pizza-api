import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderTypeormEntity } from './order.typeorm-entity';
@Entity('order-types')
export class OrderTypeTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    value: string;

    @OneToMany(() => OrderTypeormEntity, (order) => order.order_type)
    orders: OrderTypeormEntity[];
}
