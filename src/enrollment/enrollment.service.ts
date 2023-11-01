import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDTO } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDTO } from './dto/update-enrollment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnrollmentService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new enrollment association
  async createEnrollment(createNewEnrollment: CreateEnrollmentDTO) {
    try {
      createNewEnrollment.studentId = Number(createNewEnrollment.studentId);
      createNewEnrollment.teacherId = Number(createNewEnrollment.teacherId);
      createNewEnrollment.classroomId = Number(createNewEnrollment.classroomId);
      if (
        await this.prismaService.enrollment.findFirst({
          where: {
            studentId: createNewEnrollment.studentId,
            teacherId: createNewEnrollment.teacherId,
            classroomId: createNewEnrollment.classroomId,
          },
        })
      ) {
        throw new NotFoundException('Enrollment already exists');
      } else {
        return this.prismaService.enrollment.create({
          data: {
            studentId: createNewEnrollment.studentId,
            teacherId: createNewEnrollment.teacherId,
            classroomId: createNewEnrollment.classroomId,
          },
          include: {
            student: true,
            teacher: true,
            classroom: true,
          },
        });
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // Get all enrollments
  async getAllEnrollments() {
    return this.prismaService.enrollment.findMany({
      include: {
        student: true,
        teacher: true,
        classroom: true,
      },
    });
  }

  // Get a enrollment by id
  async getEnrollmentById(enrollmentId: number) {
    try {
      if (
        !(await this.prismaService.enrollment.findUnique({
          where: {
            guid_enrollment: enrollmentId,
          },
        }))
      ) {
        throw new NotFoundException('Enrollment does not exist');
      } else {
        return this.prismaService.enrollment.findUnique({
          where: {
            guid_enrollment: enrollmentId,
          },
          include: {
            student: true,
            teacher: true,
            classroom: true,
          },
        });
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // Update a enrollment by id
  async updateEnrollment(
    updateThisEnrollment: UpdateEnrollmentDTO,
    enrollmentId: number,
  ) {
    try {
      updateThisEnrollment.studentId = Number(updateThisEnrollment.studentId);
      updateThisEnrollment.teacherId = Number(updateThisEnrollment.teacherId);
      updateThisEnrollment.classroomId = Number(
        updateThisEnrollment.classroomId,
      );
      if (
        !(await this.prismaService.enrollment.findUnique({
          where: {
            guid_enrollment: enrollmentId,
          },
        }))
      ) {
        throw new NotFoundException('Enrollment does not exist');
      } else {
        return this.prismaService.enrollment.update({
          where: {
            guid_enrollment: enrollmentId,
          },
          data: {
            studentId: updateThisEnrollment.studentId,
            teacherId: updateThisEnrollment.teacherId,
            classroomId: updateThisEnrollment.classroomId,
          },
          include: {
            student: true,
            teacher: true,
            classroom: true,
          },
        });
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // Delete a enrollment by id
  async deleteEnrollment(enrollmentId: number) {
    try {
      if (
        !(await this.prismaService.enrollment.findUnique({
          where: {
            guid_enrollment: enrollmentId,
          },
        }))
      ) {
        throw new NotFoundException('Enrollment does not exist');
      } else {
        return this.prismaService.enrollment.delete({
          where: {
            guid_enrollment: enrollmentId,
          },
          include: {
            student: true,
            teacher: true,
            classroom: true,
          },
        });
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
