import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API RESTful: Generation - AWS Case')
    .setDescription(
      'API RESTful desenvolvida para gerenciar dados de alunos, professores e salas de aulas de uma escola. Modulo classroom cria as salas, students cria os alunos, teachers cria os professores e enrollments por fim cria o vinculo entre todos os módulos e gera a matricula Incluindo os dados de alunos, professores, salas de aula.',
    )
    .setVersion('1.0')
    .addTag('alunos, professores, salas')
    .build();
		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('/api', app, document);
	
		await app.listen(process.env.PORT || 3000);
	

// get the swagger json file (if app is running in development mode)
if (process.env.NODE_ENV === 'development') {
	const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static');

	// write swagger json file
	const pathToSwaggerJson = resolve(
		pathToSwaggerStaticFolder,
		'swagger.json',
	);
	const swaggerJson = JSON.stringify(document, null, 2);
	writeFileSync(pathToSwaggerJson, swaggerJson);
	console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
}
}
bootstrap();
