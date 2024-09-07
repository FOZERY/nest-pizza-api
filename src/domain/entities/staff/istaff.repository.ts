import { StaffEntity } from './staff.entity';
import { Nullable } from '../../common/common.types';

export abstract class IStaffRepository {
    abstract createStaff(staff: StaffEntity): Promise<void>;

    abstract findStaffByLogin(login: string): Promise<Nullable<StaffEntity>>;
}
