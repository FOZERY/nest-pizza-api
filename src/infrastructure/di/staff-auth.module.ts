import { StaffAuthController } from '../controllers/staff-auth.controller';
import { StaffAuthService } from '../../application/services/staff-auth.service';
import { Module } from '@nestjs/common';
import { StaffModule } from './staff.module';

@Module({
    imports: [StaffModule],
    controllers: [StaffAuthController],
    providers: [StaffAuthService],
})
export class StaffAuthModule {}
