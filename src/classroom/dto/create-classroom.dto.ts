import { IsString, IsNumber } from 'class-validator';
import { IClassroom } from 'src/interface/interface';

export class CreateClassroomDTO implements IClassroom {
  @IsNumber()
  classroomNumber: number;
  @IsString()
  classroomName: string;
}
