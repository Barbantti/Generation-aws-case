import { Controller, Post, Get, Body, Put, Delete } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDTO } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDTO } from './dto/update-enrollment.dto';
import { ParamId } from '../decorator/param-id.decorator';
import { ApiParam } from '@nestjs/swagger';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  // Create a new enrollment association
  @Post()
  async createEnrollment(@Body() createNewEnrollment: CreateEnrollmentDTO) {
    return this.enrollmentService.createEnrollment(createNewEnrollment);
  }

  // Get all enrollments
  @Get()
  async getAllEnrollments() {
    return this.enrollmentService.getAllEnrollments();
  }

  // Get a enrollment by id
  @Get(':id')
  @ApiParam({
    name: 'enrollmentId',
    description: 'ID da matricula',
  })
  async getEnrollmentById(@ParamId() enrollmentId: number) {
    return this.enrollmentService.getEnrollmentById(enrollmentId);
  }

  // Update a enrollment by id
  @Put(':id')
  @ApiParam({
    name: 'enrollmentId',
    description: 'ID da matricula',
  })
  async updateEnrollment(
    @Body() updateThisEnrollment: UpdateEnrollmentDTO,
    @ParamId() enrollmentId: number,
  ) {
    return this.enrollmentService.updateEnrollment(
      updateThisEnrollment,
      enrollmentId,
    );
  }

  // Delete a enrollment by id
  @Delete(':id')
  @ApiParam({
    name: 'enrollmentId',
    description: 'ID da matricula',
  })
  async deleteEnrollment(@ParamId() enrollmentId: number) {
    return this.enrollmentService.deleteEnrollment(enrollmentId);
  }
}
