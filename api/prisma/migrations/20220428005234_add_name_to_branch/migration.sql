/*
  Warnings:

  - Added the required column `name` to the `Branch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "name" VARCHAR(40) NOT NULL;
