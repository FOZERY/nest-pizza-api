import { OrderTypeEnum } from '../../../domain/entities/order/order.entity';
import { Optional } from '../../../domain/common/common.types';
import { AddressEntity } from '../../../domain/entities/address/address.entity';
import { CreateOrderProductDto } from '../order-product/create-order-product.dto';

export class CreateOrderDto {
    readonly restaurantId: number;

    readonly orderType: typeof OrderTypeEnum;

    readonly products: CreateOrderProductDto[];

    readonly cashierId?: Optional<number>;

    readonly userId?: Optional<number>;

    readonly deliveryAddress?: Optional<AddressEntity>;

    readonly deliveryRequestedTime?: Optional<Date>;
}
