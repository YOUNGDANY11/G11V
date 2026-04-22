import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }))


  const config = new DocumentBuilder()
    .setTitle('Documentacion G11V')
    .setDescription('API basada en el gestor de clubes de G11V asociado a VERA FUTBOL CLUB')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api-docs',app,document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
