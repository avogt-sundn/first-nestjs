import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:29092'],
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`[main.ts] Application is running on: ${await app.getUrl()}`);
}
bootstrap();
