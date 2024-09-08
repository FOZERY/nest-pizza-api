import { StaffPositionEntity } from 'src/domain/entities/staff-position/staff-position.entity';
import { StaffPositionTypeormEntity } from '../staff-position.typeorm-entity';

export class StaffPositionTypeormMapper {
    static toDomain(staffOrm: StaffPositionTypeormEntity) {
        return new StaffPositionEntity(
            staffOrm.value,
            staffOrm.description,
            staffOrm.id,
        );
    }
}
