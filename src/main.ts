// TODO
// Seguir tutorial https://www.youtube.com/watch?v=J7V9OhIphbY
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
