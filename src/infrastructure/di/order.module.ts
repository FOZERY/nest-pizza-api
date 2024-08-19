import { Module } from '@nestjs/common';
import { OrderController } from '../controllers/order.controller';
import { OrderService } from '../../application/services/order.service';
import { OrderRepository } from '../repositories/order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTypeormEntity } from '../database/typeorm/entities/order.typeorm-entity';
import { UserTypeormEntity } from '../database/typeorm/entities/user.typeorm-entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderTypeormEntity, UserTypeormEntity]),
    ],
    providers: [OrderService, OrderRepository],
    controllers: [OrderController],
})
export class OrderModule {}
