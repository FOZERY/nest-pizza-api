import { CreateStaffDto } from 'src/shared/dtos/staff/create-staff.dto';
import { StaffEntity } from './staff.entity';

export interface IStaffRepository {
    findStaffByLogin(login: string): Promise<StaffEntity | null>;

    createStaff(createStaffDto: CreateStaffDto): Promise<StaffEntity | null>;
}
