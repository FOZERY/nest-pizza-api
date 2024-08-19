import { IOrderRepository } from '../../domain/repositories/iorder.repository';
import { CreateOrderDto } from '../../application/dto/create-order.dto';
import { OrderEntity } from '../../domain/entities/order.entity';

export class OrderRepository extends IOrderRepository {
    constructor() {}

    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {}
}
