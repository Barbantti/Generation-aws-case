import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('API RESTful: Generation - AWS Case')
    .setDescription(
      'API RESTful desenvolvida para gerenciar dados de alunos, professores e salas de aulas de uma escola',
    )
    .setVersion('1.0')
    .addTag('alunos, professores, salas')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
