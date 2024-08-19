import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from '../../application/services/order.service';
import { CreateOrderDto } from '../../application/dto/create-order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto) {
        return await this.orderService.createOrder(createOrderDto);
    }
}
