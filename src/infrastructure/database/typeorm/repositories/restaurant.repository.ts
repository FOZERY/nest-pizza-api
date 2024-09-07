import { IRestaurantRepository } from '../../../../domain/entities/restaurant/irestaurant.repository';
import { RestaurantTypeormEntity } from '../entities/restaurant.typeorm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantEntity } from '../../../../domain/entities/restaurant/restaurant.entity';
import { Nullable } from '../../../../domain/common/common.types';
import { RestaurantMapper } from '../mappers/restaurant.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantRepository extends IRestaurantRepository {
    constructor(
        @InjectRepository(RestaurantTypeormEntity)
        readonly typeorm: Repository<RestaurantTypeormEntity>,
    ) {
        super();
    }

    async findOneById(id: number): Promise<Nullable<RestaurantEntity>> {
        const ormEntity = await this.typeorm.findOne({
            where: { id: id },
            relations: ['address'],
        });

        return ormEntity ? RestaurantMapper.toDomain(ormEntity) : null;
    }
}
