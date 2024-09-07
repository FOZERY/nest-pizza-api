import { TIdentifier } from '../../common/common.types';

export class RolePermissionEntity {
    private _roleId: TIdentifier;
    private _permissionId: TIdentifier;

    constructor(roleId: TIdentifier, permissionId: TIdentifier) {
        this._roleId = roleId;
        this._permissionId = permissionId;
    }
}
