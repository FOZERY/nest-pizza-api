import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { AddressTypeormEntity } from '../address/address.typeorm-entity';
import { OrderTypeormEntity } from '../order/order.typeorm-entity';

@Entity('users')
export class UserTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 11,
        unique: true,
    })
    phone_number: string;

    @Column()
    firstName: string;

    @Column({
        nullable: true,
    })
    email: string;

    @ManyToMany(() => AddressTypeormEntity)
    @JoinTable({
        name: 'users_addresses',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'address_id',
            referencedColumnName: 'id',
        },
    })
    addresses: AddressTypeormEntity[];

    @OneToMany(() => OrderTypeormEntity, (order) => order.user)
    orders: OrderTypeormEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
