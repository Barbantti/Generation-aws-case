import { TeacherService } from './teacher.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { TeacherController } from './teacher.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [TeacherController],
  providers: [TeacherService, PrismaService],
})
export class TeacherModule {}
