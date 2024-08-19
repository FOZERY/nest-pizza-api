import { OrderEntity } from '../entities/order.entity';
import { CreateOrderDto } from '../../application/dto/create-order.dto';

export abstract class IOrderRepository {
    abstract createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
}
