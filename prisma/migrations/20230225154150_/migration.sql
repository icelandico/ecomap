/*
  Warnings:

  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('EDUCATION', 'CLEANING');

-- CreateEnum
CREATE TYPE "InitiativeType" AS ENUM ('PRIVATE', 'PUBLIC');

-- CreateEnum
CREATE TYPE "InitiativeStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Initiative" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "InitiativeType" NOT NULL DEFAULT 'PUBLIC',
    "ownerId" TEXT NOT NULL,
    "status" "InitiativeStatus" NOT NULL DEFAULT 'PLANNED',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "municipality" TEXT NOT NULL,

    CONSTRAINT "Initiative_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
