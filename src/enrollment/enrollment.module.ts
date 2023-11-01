import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [EnrollmentController],
  providers: [EnrollmentService, PrismaService],
})
export class EnrollmentModule {}
