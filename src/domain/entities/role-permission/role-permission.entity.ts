import { PermissionEntityId } from '../permission/permission.entity';
import { StaffRoleEntityId } from '../staff-role/staff-role.entity';

export class RolePermissionEntity {
    private _roleId: StaffRoleEntityId;
    private _permissionId: PermissionEntityId;

    constructor(roleId: StaffRoleEntityId, permissionId: PermissionEntityId) {
        this._roleId = roleId;
        this._permissionId = permissionId;
    }
}
