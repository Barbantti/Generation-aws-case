-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "age" DROP DEFAULT,
ALTER COLUMN "age" SET DATA TYPE VARCHAR(75);

-- AlterTable
ALTER TABLE "Teacher" ALTER COLUMN "age" DROP DEFAULT,
ALTER COLUMN "age" SET DATA TYPE VARCHAR(75);