import { IsString, IsDate } from 'class-validator';
import { ITeacher } from 'src/interface/interface';

export class CreateTeacherDTO implements ITeacher {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  age: string;
  @IsDate()
  birthDate: Date;
  @IsString()
  teacherSchoolSubject: string;
}
