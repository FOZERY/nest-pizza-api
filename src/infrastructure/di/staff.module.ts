import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffTypeormEntity } from '../database/typeorm/entities/staff.typeorm-entity';
import { StaffRepository } from '../database/typeorm/repositories/staff.repository';
import { RestaurantRepository } from '../database/typeorm/repositories/restaurant.repository';
import { StaffPositionRepository } from '../database/typeorm/repositories/staff-position.repository';
import { StaffRoleRepository } from '../database/typeorm/repositories/staff-role.repository';
import { RestaurantTypeormEntity } from '../database/typeorm/entities/restaurant.typeorm-entity';
import { StaffRoleTypeormEntity } from '../database/typeorm/entities/staff-role.typeorm-entity';
import { StaffPositionTypeormEntity } from '../database/typeorm/entities/staff-position.typeorm-entity';
import { StaffService } from '../../application/services/staff/staff.service';
import { IStaffRepository } from '../../domain/entities/staff/istaff.repository';
import { IStaffRoleRepository } from '../../domain/entities/staff-role/istaff-role.repository';
import { IRestaurantRepository } from '../../domain/entities/restaurant/irestaurant.repository';
import { IStaffPositionRepository } from '../../domain/entities/staff-position/istaff-position.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            StaffTypeormEntity,
            RestaurantTypeormEntity,
            StaffRoleTypeormEntity,
            StaffPositionTypeormEntity,
        ]),
    ],
    providers: [
        StaffService,
        {
            provide: IStaffRepository,
            useClass: StaffRepository,
        },
        {
            provide: IRestaurantRepository,
            useClass: RestaurantRepository,
        },
        {
            provide: IStaffPositionRepository,
            useClass: StaffPositionRepository,
        },
        {
            provide: IStaffRoleRepository,
            useClass: StaffRoleRepository,
        },
    ],
    exports: [StaffService],
})
export class StaffModule {}
