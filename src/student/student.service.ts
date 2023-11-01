import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';
import moment from 'moment';

@Injectable()
export class StudentService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new student
  async createStudent(createNewStudent: CreateStudentDTO) {
    if (!createNewStudent) {
      throw new NotFoundException('Student already exists');
    } else {
      createNewStudent.firstSemesterGrade = Number(
        createNewStudent.firstSemesterGrade,
      );

      createNewStudent.secondSemesterGrade = Number(
        createNewStudent.secondSemesterGrade,
      );

      createNewStudent.finalGradeAverage =
        (createNewStudent.firstSemesterGrade +
          createNewStudent.secondSemesterGrade) /
        2;

      createNewStudent.birthDate = moment(
        createNewStudent.birthDate,
        'DD/MM/YYYY',
      ).toDate();

      return this.prismaService.student.create({
        data: createNewStudent,
      });
    }
  }

  // Get all student
  async getAllStudents() {
    return this.prismaService.student.findMany();
  }

  // Get a student by id
  async getStudentById(studentId: number) {
    if (
      !(await this.prismaService.student.findUnique({
        where: {
          guid_student: studentId,
        },
      }))
    ) {
      throw new NotFoundException('Student does not exist');
    } else {
      return this.prismaService.student.findUnique({
        where: {
          guid_student: studentId,
        },
      });
    }
  }

  // Update a student by id
  async updateStudent(updateThisStudent: UpdateStudentDTO, studentId: number) {
    if (
      !(await this.prismaService.student.findUnique({
        where: {
          guid_student: studentId,
        },
      }))
    ) {
      throw new NotFoundException('Student does not exist');
    } else {
      updateThisStudent.firstSemesterGrade = Number(
        updateThisStudent.firstSemesterGrade,
      );

      updateThisStudent.secondSemesterGrade = Number(
        updateThisStudent.secondSemesterGrade,
      );

      updateThisStudent.finalGradeAverage =
        (updateThisStudent.firstSemesterGrade +
          updateThisStudent.secondSemesterGrade) /
        2;

      updateThisStudent.birthDate = moment(
        updateThisStudent.birthDate,
        'DD/MM/YYYY',
      ).toDate();

      return this.prismaService.student.update({
        where: {
          guid_student: studentId,
        },
        data: updateThisStudent,
      });
    }
  }

  // Delete a student by id
  async deleteStudent(studentId: number) {
    if (
      !(await this.prismaService.student.findUnique({
        where: {
          guid_student: studentId,
        },
      }))
    ) {
      throw new NotFoundException('Student does not exist');
    } else {
      return this.prismaService.student.delete({
        where: {
          guid_student: studentId,
        },
      });
    }
  }
}
