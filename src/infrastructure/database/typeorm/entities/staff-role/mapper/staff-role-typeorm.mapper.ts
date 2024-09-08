import { StaffRoleEntity } from 'src/domain/entities/staff-role/staff-role.entity';
import { StaffRoleTypeormEntity } from '../staff-role.typeorm-entity';

export class StaffRoleTypeormMapper {
    static toDomain(role: StaffRoleTypeormEntity) {
        return new StaffRoleEntity(role.value, role.description, role.id);
    }
}
