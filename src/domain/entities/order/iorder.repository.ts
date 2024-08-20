import { OrderEntity } from './order.entity';
import { CreateOrderDto } from '../../../shared/dtos/order/create-order.dto';

export abstract class IOrderRepository {
    abstract createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
}
