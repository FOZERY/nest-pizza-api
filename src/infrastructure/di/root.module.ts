import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./env/.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        InfrastructureModule,
    ],
    exports: [],
})
export class RootModule {}
