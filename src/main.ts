import { NestFactory } from '@nestjs/core';
import { RootModule } from './infrastructure/di/root.module';

async function start() {
    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create(RootModule);
    await app.listen(PORT, () => console.log(`App started on port ${PORT}`));
}

start();
