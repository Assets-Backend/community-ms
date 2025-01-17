import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';
import { MetadataInterceptor } from './common/interceptors/metadata.interceptor';

async function bootstrap() {

    const logger = new Logger('Main');

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.NATS,
            options: {
                servers: envs.natsServers,
            }
        }
    );

    app.useGlobalInterceptors(new MetadataInterceptor());

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            // forbidNonWhitelisted: true,
        }),
    );

    await app.listen();
    logger.log(`Community microservice is running on port ${envs.port}`);
}
bootstrap();
