import { OrderEntity } from '../../domain/entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { IOrderRepository } from '../../domain/repositories/iorder.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: IOrderRepository) {}

    async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
        return await this.orderRepository.createOrder(createOrderDto);
    }
}
