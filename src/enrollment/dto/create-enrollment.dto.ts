import { IsNumber } from 'class-validator';
import { IEnrollment } from 'src/interface/interface';

export class CreateEnrollmentDTO implements IEnrollment {
  @IsNumber()
  studentId: number;
  @IsNumber()
  teacherId: number;
  @IsNumber()
  classroomId: number;
}
