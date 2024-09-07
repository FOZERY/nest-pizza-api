import { Optional } from '../../../domain/common/common.types';
import { AddressEntity } from '../../../domain/entities/address/address.entity';
import { CreateOrderProductDto } from '../order-product/create-order-product.dto';
import { OrderTypeEntity } from '../../../domain/entities/order-type/order-type.entity';

export class CreateOrderDto {
    readonly restaurantId: number;

    readonly orderType: OrderTypeEntity;

    readonly products: CreateOrderProductDto[];

    readonly cashierId?: Optional<number>;

    readonly userId?: Optional<number>;

    readonly deliveryAddress?: Optional<AddressEntity>;

    readonly deliveryRequestedTime?: Optional<Date>;
}
