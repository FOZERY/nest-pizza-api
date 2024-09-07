import { StaffRoleEntity } from './staff-role.entity';
import { Nullable } from '../../common/common.types';

export abstract class IStaffRoleRepository {
    abstract findByValue(value: string): Promise<Nullable<StaffRoleEntity>>;
}
