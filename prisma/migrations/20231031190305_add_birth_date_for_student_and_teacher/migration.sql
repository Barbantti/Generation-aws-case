/*
  Warnings:

  - The primary key for the `Classroom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `guid_classrom` on the `Classroom` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_classroomId_fkey";

-- AlterTable
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_pkey",
DROP COLUMN "guid_classrom",
ADD COLUMN     "guid_classroom" SERIAL NOT NULL,
ADD CONSTRAINT "Classroom_pkey" PRIMARY KEY ("guid_classroom");

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "LastName",
ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "lastName" VARCHAR(75) NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "LastName",
ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "lastName" VARCHAR(75) NOT NULL;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("guid_classroom") ON DELETE RESTRICT ON UPDATE CASCADE;
