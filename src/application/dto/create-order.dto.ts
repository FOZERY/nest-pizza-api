import { OrderTypeEnum } from '../../domain/entities/order.entity';
import { Optional } from '../../domain/common/common.types';
import { AddressEntity } from '../../domain/entities/address.entity';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    readonly restaurantId: number;

    readonly orderType: typeof OrderTypeEnum;

    readonly products: CreateOrderProductDto[];

    readonly cashierId?: Optional<number>;

    readonly userId?: Optional<number>;

    readonly deliveryAddress?: Optional<AddressEntity>;

    readonly deliveryRequestedTime?: Optional<Date>;
}
