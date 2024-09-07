import { StaffPositionEntity } from './staff-position.entity';
import { Nullable } from '../../common/common.types';

export abstract class IStaffPositionRepository {
    abstract findByValue(value: string): Promise<Nullable<StaffPositionEntity>>;
}
