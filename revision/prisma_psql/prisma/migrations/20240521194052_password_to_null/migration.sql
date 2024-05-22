/*
  Warnings:

  - Made the column `password` on table `My_User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "My_User" ALTER COLUMN "password" SET NOT NULL;
