import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5001);
  app.enableCors({
    origin: 'http://localhost:3000',
  });
}
bootstrap();
