import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure.module';
import { StaffAuthModule } from './staff-auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./env/.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        InfrastructureModule,
        StaffAuthModule,
    ],
    exports: [],
})
export class RootModule {}
