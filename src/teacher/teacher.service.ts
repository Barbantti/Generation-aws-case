import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDTO } from './dto/create-teacher.dto';
import { UpdateTeacherDTO } from './dto/update-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';
import moment from 'moment';

@Injectable()
export class TeacherService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new teacher
  async createTeacher(createNewTeacher: CreateTeacherDTO) {
    if (!createNewTeacher) {
      throw new NotFoundException('Teacher already exists');
    } else {
      createNewTeacher.birthDate = moment(
        createNewTeacher.birthDate,
        'DD/MM/YYYY',
      ).toDate();
      return this.prismaService.teacher.create({
        data: createNewTeacher,
      });
    }
  }

  // Get all teachers
  async getAllTeachers() {
    return this.prismaService.teacher.findMany();
  }

  // Get a teacher by id
  async getTeacherById(teacherId: number) {
    console.log('teacherId: ', teacherId);
    if (
      !(await this.prismaService.teacher.findUnique({
        where: {
          guid_teacher: teacherId,
        },
      }))
    ) {
      throw new NotFoundException('Teacher does not exist');
    } else {
      return this.prismaService.teacher.findUnique({
        where: {
          guid_teacher: teacherId,
        },
      });
    }
  }

  // Update a teacher by id
  async updateTeacher(updateThisTeacher: UpdateTeacherDTO, teacherId: number) {
    if (
      !(await this.prismaService.teacher.findUnique({
        where: {
          guid_teacher: teacherId,
        },
      }))
    ) {
      throw new NotFoundException('Teacher does not exist');
    } else {
      updateThisTeacher.birthDate = moment(
        updateThisTeacher.birthDate,
        'DD/MM/YYYY',
      ).toDate();
      return this.prismaService.teacher.update({
        where: {
          guid_teacher: teacherId,
        },
        data: updateThisTeacher,
      });
    }
  }

  // Delete a teacher by id
  async deleteTeacher(teacherId: number) {
    if (
      !(await this.prismaService.teacher.findUnique({
        where: {
          guid_teacher: teacherId,
        },
      }))
    ) {
      throw new NotFoundException('Teacher does not exist');
    } else {
      return this.prismaService.teacher.delete({
        where: {
          guid_teacher: teacherId,
        },
      });
    }
  }
}
