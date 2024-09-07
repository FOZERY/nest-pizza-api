import {
    IsAlpha,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsStrongPassword,
} from 'class-validator';
import {
    StaffPositionEntity,
    StaffPositionEnum,
} from '../../../domain/entities/staff-position/staff-position.entity';
import { StaffRoleEnum } from '../../../domain/entities/staff-role/staff-role.entity';
import { Optional } from '../../../domain/common/common.types';

export class CreateStaffDto {
    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha('ru-RU')
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha('ru-RU')
    readonly lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber('RU')
    readonly phoneNumber: string;

    @IsOptional()
    @IsString()
    readonly patronymic: Optional<string>;

    @IsNotEmpty()
    @IsInt()
    readonly restaurant_id: number;

    @IsNotEmpty()
    @IsEnum(StaffPositionEnum)
    readonly staff_position: string;

    @IsNotEmpty()
    @IsEnum(StaffRoleEnum)
    readonly staff_role: string;

    @IsOptional()
    @IsString()
    readonly info: Optional<string>;
}
