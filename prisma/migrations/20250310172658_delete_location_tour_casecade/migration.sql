-- DropForeignKey
ALTER TABLE "location_tours" DROP CONSTRAINT "location_tours_tour_id_fkey";

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
