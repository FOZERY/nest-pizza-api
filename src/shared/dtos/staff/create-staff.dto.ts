import {
    IsAlpha,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsStrongPassword,
} from 'class-validator';

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

    @IsNotEmpty()
    @IsInt()
    readonly restaurantId: number;

    @IsNotEmpty()
    readonly staffPositionId: number;

    @IsNotEmpty()
    readonly roleId: number;

    @IsOptional()
    @IsString()
    readonly patronymic?: string;

    @IsOptional()
    @IsString()
    readonly info?: string;
}
