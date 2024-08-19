import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AddressTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    region: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;

    @Column()
    postalCode: string;

    @Column({
        nullable: true,
    })
    apartment?: string;

    @Column({
        nullable: true,
    })
    block?: string;
}
