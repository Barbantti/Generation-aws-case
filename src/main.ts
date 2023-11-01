import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const options = new DocumentBuilder()
.setTitle('API RESTful: Generation - AWS Case')
.setDescription(
	'API RESTful desenvolvida para gerenciar dados de alunos, professores e salas de aulas de uma escola. Modulo classroom cria as salas, students cria os alunos, teachers cria os professores e enrollments por fim cria o vinculo entre todos os módulos e gera a matricula Incluindo os dados de alunos, professores, salas de aula.',
)
.setVersion('1.0')
.addTag('alunos, professores, salas')

.build();

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

		const document = SwaggerModule.createDocument(app, options);

		// SwaggerModule.setup('api', app, document);

		SwaggerModule.setup('swagger', app, document, {
			customSiteTitle: 'Backend Generator',
			customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
			customJs: [
				'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
			],
			customCssUrl: [
				'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
				'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
				'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
			],
		});
	
		await app.listen(process.env.PORT);
	
}
bootstrap();
