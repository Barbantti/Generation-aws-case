import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [ClassroomController],
  providers: [ClassroomService, PrismaService],
})
export class ClassroomModule {}
