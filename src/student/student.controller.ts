import { Controller, Post, Get, Body, Put, Delete } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';
import { StudentService } from './student.service';
import { ParamId } from '../decorator/param-id.decorator';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Create a new student
  @Post()
  async createStudent(@Body() createNewStudent: CreateStudentDTO) {
    return this.studentService.createStudent(createNewStudent);
  }

  // Get all student
  @Get()
  async getAllStudents() {
    return this.studentService.getAllStudents();
  }

  // Get a student by id
  @Get(':id')
  async getStudentById(@ParamId() studentId: number) {
    return this.studentService.getStudentById(studentId);
  }

  // Update a student by id
  @Put(':id')
  async updateStudent(
    @Body() updateThisStudent: UpdateStudentDTO,
    @ParamId() studentId: number,
  ) {
    return this.studentService.updateStudent(updateThisStudent, studentId);
  }

  // Delete a student by id
  @Delete(':id')
  async deleteStudent(@ParamId() studentId: number) {
    return this.studentService.deleteStudent(studentId);
  }
}
