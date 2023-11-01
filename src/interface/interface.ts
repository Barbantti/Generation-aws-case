export interface IStudent {
  firstName: string;
  lastName: string;
  age: string;
  birthDate: Date;
  firstSemesterGrade: number;
  secondSemesterGrade: number;
  finalGradeAverage?: number;
}

export interface ITeacher {
  firstName: string;
  lastName: string;
  age: string;
  birthDate: Date;
  teacherSchoolSubject: string;
}

export interface IClassroom {
  classroomNumber: number;
  classroomName: string;
}

export interface IEnrollment {
  studentId: number;
  teacherId: number;
  classroomId: number;
}
