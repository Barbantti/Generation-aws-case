import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService, PrismaService],
})
export class StudentModule {}
