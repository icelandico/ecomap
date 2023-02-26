-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT,
ALTER COLUMN "location" DROP NOT NULL;
