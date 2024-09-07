import { StaffService } from './staff.service';
import { IStaffRoleRepository } from '../../../domain/entities/staff-role/istaff-role.repository';
import { IStaffRepository } from '../../../domain/entities/staff/istaff.repository';
import { IRestaurantRepository } from '../../../domain/entities/restaurant/irestaurant.repository';
import { IStaffPositionRepository } from '../../../domain/entities/staff-position/istaff-position.repository';
import {
    StaffRoleEntity,
    StaffRoleEnum,
} from '../../../domain/entities/staff-role/staff-role.entity';
import { RestaurantEntity } from '../../../domain/entities/restaurant/restaurant.entity';
import {
    StaffPositionEntity,
    StaffPositionEnum,
} from '../../../domain/entities/staff-position/staff-position.entity';
import { AddressEntity } from '../../../domain/entities/address/address.entity';
import { PhoneNumberVo } from '../../../domain/value-objects/phone-number.vo';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateStaffDto } from '../../../shared/dtos/staff/create-staff.dto';
import { NotFoundException } from '@nestjs/common';

describe('StaffService', () => {
    let staffService: StaffService;
    let staffRepository: IStaffRepository;
    let restaurantRepository: IRestaurantRepository;
    let staffPositionRepository: IStaffPositionRepository;
    let staffRoleRepository: IStaffRoleRepository;

    const mockAddress = new AddressEntity(
        1,
        'Россия',
        'Белгородская обл.',
        'Белгород',
        'Есенина',
        '31',
        '300110',
    );
    const mockRestaurant = new RestaurantEntity(
        1,
        mockAddress,
        new Date(),
        new Date(),
        new PhoneNumberVo('79040806456'),
        [],
        [],
        [],
    );
    const mockStaffPosition = new StaffPositionEntity(
        1,
        StaffPositionEnum.MANAGER,
        'description',
    );
    const mockStaffRole = new StaffRoleEntity(
        1,
        StaffRoleEnum.MANAGER,
        'description',
    );

    const mockStaffRepository = {
        createStaff: jest.fn(),
    };

    const mockRestaurantRepository = {
        findOneById: jest.fn(),
    };

    const mockStaffPositionRepository = {
        findByValue: jest.fn(),
    };

    const mockStaffRoleRepository = {
        findByValue: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                StaffService,
                { provide: IStaffRepository, useValue: mockStaffRepository },
                {
                    provide: IRestaurantRepository,
                    useValue: mockRestaurantRepository,
                },
                {
                    provide: IStaffPositionRepository,
                    useValue: mockStaffPositionRepository,
                },
                {
                    provide: IStaffRoleRepository,
                    useValue: mockStaffRoleRepository,
                },
            ],
        }).compile();

        staffService = module.get<StaffService>(StaffService);
        staffRepository = module.get<IStaffRepository>(IStaffRepository);
        restaurantRepository = module.get<IRestaurantRepository>(
            IRestaurantRepository,
        );
        staffPositionRepository = module.get<IStaffPositionRepository>(
            IStaffPositionRepository,
        );
        staffRoleRepository =
            module.get<IStaffRoleRepository>(IStaffRoleRepository);
    });

    it('should be defined', () => {
        expect(staffService).toBeDefined();
    });

    describe('createStaff', () => {
        it('should create staff successfully', async () => {
            const createStaffDto: CreateStaffDto = {
                login: 'test_login',
                password: 'StrongPassword123!',
                firstName: 'Иван',
                lastName: 'Иванов',
                phoneNumber: '+79001234567',
                patronymic: 'Иванович',
                restaurant_id: 1,
                staff_position: 'manager',
                staff_role: 'admin',
                info: 'Some info',
            };

            mockRestaurantRepository.findOneById.mockResolvedValue(
                mockRestaurant,
            );
            mockStaffPositionRepository.findByValue.mockResolvedValue(
                mockStaffPosition,
            );
            mockStaffRoleRepository.findByValue.mockResolvedValue(
                mockStaffRole,
            );
            mockStaffRepository.createStaff.mockResolvedValue(createStaffDto);

            await staffService.createStaff(createStaffDto);

            expect(restaurantRepository.findOneById).toHaveBeenCalledWith(
                createStaffDto.restaurant_id,
            );
            expect(staffPositionRepository.findByValue).toHaveBeenCalledWith(
                createStaffDto.staff_position,
            );
            expect(staffRoleRepository.findByValue).toHaveBeenCalledWith(
                createStaffDto.staff_role,
            );
            expect(staffRepository.createStaff).toHaveBeenCalled();
        });

        it('should throw NotFoundException if restaurant not found', async () => {
            const createStaffDto: CreateStaffDto = {
                login: 'test_login',
                password: 'StrongPassword123!',
                firstName: 'Иван',
                lastName: 'Иванов',
                phoneNumber: '+79001234567',
                patronymic: 'Иванович',
                restaurant_id: 1,
                staff_position: 'manager',
                staff_role: 'admin',
                info: 'Some info',
            };

            mockRestaurantRepository.findOneById.mockResolvedValue(null);

            await expect(
                staffService.createStaff(createStaffDto),
            ).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if staff position not found', async () => {
            const createStaffDto: CreateStaffDto = {
                login: 'test_login',
                password: 'StrongPassword123!',
                firstName: 'Иван',
                lastName: 'Иванов',
                phoneNumber: '+79001234567',
                patronymic: 'Иванович',
                restaurant_id: 1,
                staff_position: 'manager',
                staff_role: 'admin',
                info: 'Some info',
            };

            mockRestaurantRepository.findOneById.mockResolvedValue(
                mockRestaurant,
            );
            mockStaffPositionRepository.findByValue.mockResolvedValue(null);

            await expect(
                staffService.createStaff(createStaffDto),
            ).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException if staff role not found', async () => {
            const createStaffDto: CreateStaffDto = {
                login: 'test_login',
                password: 'StrongPassword123!',
                firstName: 'Иван',
                lastName: 'Иванов',
                phoneNumber: '+79001234567',
                patronymic: 'Иванович',
                restaurant_id: 1,
                staff_position: 'manager',
                staff_role: 'admin',
                info: 'Some info',
            };

            mockRestaurantRepository.findOneById.mockResolvedValue(
                mockRestaurant,
            );
            mockStaffPositionRepository.findByValue.mockResolvedValue(
                mockStaffPosition,
            );
            mockStaffRoleRepository.findByValue.mockResolvedValue(null);

            await expect(
                staffService.createStaff(createStaffDto),
            ).rejects.toThrow(NotFoundException);
        });
    });
});
