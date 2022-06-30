/*
  Warnings:

  - Added the required column `slack` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` ADD COLUMN `slack` VARCHAR(255) NOT NULL;
