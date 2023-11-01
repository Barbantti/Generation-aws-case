import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassroomDTO } from './dto/create-classroom.dto';
import { UpdateClassroomDTO } from './dto/update-classroom.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassroomService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new classroom
  async createClassroom(createNewClassroom: CreateClassroomDTO) {
    createNewClassroom.classroomNumber = Number(
      createNewClassroom.classroomNumber,
    );
    if (
      await this.prismaService.classroom.findFirst({
        where: {
          classroomNumber: createNewClassroom.classroomNumber,
          classroomName: createNewClassroom.classroomName,
        },
      })
    ) {
      throw new NotFoundException('Classroom already exists');
    } else {
      return this.prismaService.classroom.create({
        data: {
          classroomNumber: createNewClassroom.classroomNumber,
          classroomName: createNewClassroom.classroomName,
        },
      });
    }
  }

  // Get all classrooms
  async getAllClassrooms() {
    return this.prismaService.classroom.findMany();
  }

  // Get a classroom by id
  async getClassroomById(classroomId: number) {
    return this.prismaService.classroom.findUnique({
      where: {
        guid_classroom: classroomId,
      },
    });
  }

  // Update a classroom by id
  async updateClassroom(
    updateThisClassroom: UpdateClassroomDTO,
    classroomId: number,
  ) {
    if (
      !(await this.prismaService.classroom.findUnique({
        where: {
          guid_classroom: classroomId,
        },
      }))
    ) {
      throw new NotFoundException('Classroom does not exist');
    } else {
      updateThisClassroom.classroomNumber = Number(
        updateThisClassroom.classroomNumber,
      );
      return this.prismaService.classroom.update({
        where: {
          guid_classroom: classroomId,
        },
        data: {
          classroomNumber: updateThisClassroom.classroomNumber,
          classroomName: updateThisClassroom.classroomName,
        },
      });
    }
  }

  // Delete a classroom by id
  async deleteClassroom(classroomId: number) {
    if (
      !(await this.prismaService.classroom.findUnique({
        where: {
          guid_classroom: classroomId,
        },
      }))
    ) {
      throw new NotFoundException('Classroom does not exist');
    } else {
      return this.prismaService.classroom.delete({
        where: {
          guid_classroom: classroomId,
        },
      });
    }
  }
}
