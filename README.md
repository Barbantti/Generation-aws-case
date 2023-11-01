### Generation Brazil bootcamp AWS Case

## Visão Geral

Este projeto foi desenvolvido utilizando Nest.js, TypeScript, Prisma ORM e PostgreSQL. Ele consiste em um sistema de gerenciamento com três módulos independentes para Student, Teacher e Classroom, além de um módulo de Enrollment que gerencia o vínculo entre os três primeiros módulos por meio de IDs.

## Instalação

## Para começar a utilizar o projeto, siga os passos abaixo:

1. Clone o repositório para sua máquina local.

git clone git@github.com:Barbantti/Generation-aws-case.git

2. Instale as dependências.

cd generation-aws-case

npm install

3. Crie um arquivo .env baseado no exemplo fornecido no .env.example e configure as variáveis de ambiente, como a conexão com o banco de dados PostgreSQL.

4. Inicie o servidor.

npm run start || npm run dev

## Estrutura do Projeto

plaintext

generation-aws-case/src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── classroom/
│   ├── classroom.controller.ts
│   ├── classroom.module.ts
│   ├── classroom.service.ts
│   └── dto/
│       ├── create-classroom.dto.ts
│       └── update-classroom.dto.ts
├── enrollment/
│   ├── enrollment.controller.ts
│   ├── enrollment.module.ts
│   ├── enrollment.service.ts
│   └── dto/
│       ├── create-enrollment.dto.ts
│       └── update-enrollment.dto.ts
├── interface/
│   └── interface.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── student/
│   ├── student.controller.ts
│   ├── student.module.ts
│   ├── student.service.ts
│   └── dto/
│       ├── create-student.dto.ts
│       └── update-student.dto.ts
└── teacher/
    ├── teacher.controller.ts
    ├── teacher.module.ts
    ├── teacher.service.ts
    └── dto/
        ├── create-teacher.dto.ts
        └── update-teacher.dto.ts

## Módulos

## Student Module

- O módulo de Student gerencia informações sobre alunos, incluindo nome, idade e notas dos semestres.

    Controller: student.controller.ts
    Service: student.service.ts
    DTOs: create-student.dto.ts, update-student.dto.ts

## Teacher Module

- O módulo de Teacher gerencia informações sobre professores, incluindo nome, idade e disciplina lecionada.

    Controller: teacher.controller.ts
    Service: teacher.service.ts
    DTOs: create-teacher.dto.ts, update-teacher.dto.ts

## Classroom Module

- O módulo de Classroom gerencia informações sobre salas de aula, incluindo número e nome da sala.

    Controller: classroom.controller.ts
    Service: classroom.service.ts
    DTOs: create-classroom.dto.ts, update-classroom.dto.ts

## Enrollment Module

- O módulo de Enrollment gerencia o vínculo entre Student, Teacher e Classroom por meio de IDs.

    Controller: enrollment.controller.ts
    Service: enrollment.service.ts
    DTOs: create-enrollment.dto.ts, update-enrollment.dto.ts

## Uso

- Para usar este projeto, siga os passos de instalação e utilize os endpoints fornecidos pelos módulos para gerenciar alunos, professores, salas de aula e vinculações.

## Conclusão

O Case da Generation Brazil para o processo seletivo do bootcamp AWS foi muito mais do que apenas um desafio técnico. Foi uma oportunidade de crescimento profissional e pessoal, onde pude aplicar meu conhecimento, adquirir novas habilidades e enfrentar desafios reais de desenvolvimento.

Estou extremamente grato pela oportunidade e ansioso para aplicar tudo o que aprendi na proxima etapa do Generation bootcamp AWS.

## Este projeto foi desenvolvido por [Leonardo Barbanti] para o AWS Case da Generation Brazil. Qualquer dúvida ou suporte, entre em contato pelo email [leonardo.barbantti@gmail.com].