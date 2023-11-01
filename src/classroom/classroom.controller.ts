import { Controller, Post, Get, Body, Put, Delete } from '@nestjs/common';
import { CreateClassroomDTO } from './dto/create-classroom.dto';
import { UpdateClassroomDTO } from './dto/update-classroom.dto';
import { ClassroomService } from './classroom.service';
import { ParamId } from 'src/decorator/param-id.decorator';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  // Create a new classroom
  @Post()
  async createClassroom(@Body() createNewClassroom: CreateClassroomDTO) {
    console.log('createNewClassroom: ', createNewClassroom);
    return this.classroomService.createClassroom(createNewClassroom);
  }

  // Get all classrooms
  @Get()
  async getAllClassrooms() {
    return this.classroomService.getAllClassrooms();
  }

  // Get a classroom by id
  @Get(':id')
  async getClassroomById(@ParamId() classroomId: number) {
    return this.classroomService.getClassroomById(classroomId);
  }

  // Update a classroom by id
  @Put(':id')
  async updateClassroom(
    @Body() updateThisClassroom: UpdateClassroomDTO,
    @ParamId() classroomId: number,
  ) {
    return this.classroomService.updateClassroom(
      updateThisClassroom,
      classroomId,
    );
  }

  // Delete a classroom by id
  @Delete(':id')
  async deleteClassroom(@ParamId() classroomId: number) {
    return this.classroomService.deleteClassroom(classroomId);
  }
}
