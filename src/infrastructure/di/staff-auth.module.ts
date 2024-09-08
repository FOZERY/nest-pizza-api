import { Module } from '@nestjs/common';
import { StaffAuthService } from 'src/application/services/staff-auth/staff-auth.service';
import { StaffService } from 'src/application/services/staff/staff.service';
import { StaffAuthController } from '../controllers/staff-auth/staff-auth.controller';
import { StaffModule } from './staff.module';

@Module({
    imports: [StaffModule],
    controllers: [StaffAuthController],
    providers: [StaffAuthService, StaffService],
})
export class StaffAuthModule {}
