-- CreateTable
CREATE TABLE "Student" (
    "guid_student" SERIAL NOT NULL,
    "firstName" VARCHAR(75) NOT NULL,
    "LastName" VARCHAR(75) NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,
    "firstSemesterGrade" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "secondSemesterGrade" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "finalGradeAverage" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("guid_student")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "guid_teacher" SERIAL NOT NULL,
    "firstName" VARCHAR(75) NOT NULL,
    "LastName" VARCHAR(75) NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,
    "teacherSchoolSubject" VARCHAR(75) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("guid_teacher")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "guid_classrom" SERIAL NOT NULL,
    "classroomNumber" INTEGER NOT NULL DEFAULT 0,
    "classroomName" VARCHAR(75) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("guid_classrom")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "guid_enrollment" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "classroomId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("guid_enrollment")
);

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("guid_student") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("guid_teacher") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("guid_classrom") ON DELETE RESTRICT ON UPDATE CASCADE;
