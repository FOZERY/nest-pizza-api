import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserTypeormEntity } from './user.typeorm-entity';

@Entity()
export class OrderTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    restaurant_id: number;

    @Column()
    order_time: Date;

    @Column()
    order_price: number;

    @Column()
    delivery_price: number;

    @Column()
    delivery_requested_time: number;

    @Column()
    delivery_actual_time: number;

    @ManyToOne(() => UserTypeormEntity, (user) => user.orders)
    user: UserTypeormEntity;
}
