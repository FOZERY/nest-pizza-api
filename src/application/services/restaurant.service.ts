import { IRestaurantRepository } from '../../domain/entities/restaurant/irestaurant.repository';

export class RestaurantService {
    constructor(private readonly restaurantRepository: IRestaurantRepository) {}
}
