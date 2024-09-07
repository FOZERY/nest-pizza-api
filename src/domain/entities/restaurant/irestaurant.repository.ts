import { RestaurantEntity } from './restaurant.entity';
import { Nullable } from '../../common/common.types';

export abstract class IRestaurantRepository {
    abstract findOneById(id: number): Promise<Nullable<RestaurantEntity>>;
}
