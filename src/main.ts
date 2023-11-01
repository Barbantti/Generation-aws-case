import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// core
import { resolve } from 'path';
import { writeFileSync, createWriteStream } from 'fs';
import { get } from 'http';

async function bootstrap() {
	const serverUrl = `http://generation-aws-case.vercel.app/`;
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
  SwaggerModule.setup('/api', app, document, {
		swaggerOptions: {
				customJs:
						"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui-bundle.js",
		},
});

  await app.listen(process.env.PORT || 3000);

	// get the swagger json file (if app is running in development mode)
	if (process.env.NODE_ENV === 'development') {

			// write swagger ui files
			get(
				`${serverUrl}/swagger/swagger-ui-bundle.js`, function 
				(response) {
					response.pipe(createWriteStream('src/swagger-static/swagger-ui-bundle.js'));
					console.log(
			`Swagger UI bundle file written to: 'src/swagger-static/swagger-ui-bundle.js'`,
		);
			});

			get(`${serverUrl}/swagger/swagger-ui-init.js`, function (response) {
				response.pipe(createWriteStream('src/swagger-static/swagger-ui-init.js'));
				console.log(
			`Swagger UI init file written to: 'src/swagger-static/swagger-ui-init.js'`,
		);
			});

			get(
		`${serverUrl}/swagger/swagger-ui-standalone-preset.js`,
		function (response) {
				response.pipe(
				createWriteStream('src/swagger-static/swagger-ui-standalone-preset.js'),
			);
				console.log(
				`Swagger UI standalone preset file written to: 'src/swagger-static/swagger-ui-standalone-preset.js'`,
			);
			});

			get(`${serverUrl}/swagger/swagger-ui.css`, function (response) {
				response.pipe(createWriteStream('src/swagger-static/swagger-ui.css'));
				console.log(
			`Swagger UI css file written to: 'src/swagger-static/swagger-ui.css'`,
		);
			});

	}
}
bootstrap();
