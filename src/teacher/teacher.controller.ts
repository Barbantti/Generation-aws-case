import { Controller, Post, Get, Body, Put, Delete } from '@nestjs/common';
import { CreateTeacherDTO } from './dto/create-teacher.dto';
import { UpdateTeacherDTO } from './dto/update-teacher.dto';
import { TeacherService } from './teacher.service';
import { ParamId } from 'src/decorator/param-id.decorator';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // Create a new teacher
  @Post()
  async createTeacher(@Body() createNewTeacher: CreateTeacherDTO) {
    return this.teacherService.createTeacher(createNewTeacher);
  }

  // Get all teachers
  @Get()
  async getAllTeachers() {
    return this.teacherService.getAllTeachers();
  }

  // Get a teacher by id
  @Get(':id')
  async getTeacherById(@ParamId() teacherId: number) {
    return this.teacherService.getTeacherById(teacherId);
  }

  // Update a teacher by id
  @Put(':id')
  async updateTeacher(
    @Body() updateThisTeacher: UpdateTeacherDTO,
    @ParamId() teacherId: number,
  ) {
    return this.teacherService.updateTeacher(updateThisTeacher, teacherId);
  }

  // Delete a teacher by id
  @Delete(':id')
  async deleteTeacher(@ParamId() teacherId: number) {
    return this.teacherService.deleteTeacher(teacherId);
  }
}
