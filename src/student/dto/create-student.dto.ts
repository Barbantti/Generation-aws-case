import { IsString, IsNumber, IsDate } from 'class-validator';
import { IStudent } from 'src/interface/interface';

export class CreateStudentDTO implements IStudent {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  age: string;
  @IsDate()
  birthDate: Date;
  @IsNumber()
  firstSemesterGrade: number;
  @IsNumber()
  secondSemesterGrade: number;
  @IsNumber()
  finalGradeAverage: number;
}
