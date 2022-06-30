/*
  Warnings:

  - Added the required column `staff` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` ADD COLUMN `staff` VARCHAR(255) NOT NULL;
