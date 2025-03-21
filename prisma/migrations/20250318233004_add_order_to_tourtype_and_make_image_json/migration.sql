/*
  Warnings:

  - The `image` column on the `tour_type` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tour_type" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "image",
ADD COLUMN     "image" JSONB NOT NULL DEFAULT '{}';
