import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressTypeormEntity } from './address.typeorm-entity';
import { OrderTypeormEntity } from './order.typeorm-entity';

@Entity()
export class UserTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 11,
    })
    phone_number: string;

    @Column()
    name: string;

    @Column({
        nullable: true,
    })
    email?: string;

    @ManyToMany(() => AddressTypeormEntity)
    @JoinTable()
    addresses: AddressTypeormEntity[];

    @OneToMany(() => OrderTypeormEntity, (order) => order.user)
    orders: OrderTypeormEntity[];
}
