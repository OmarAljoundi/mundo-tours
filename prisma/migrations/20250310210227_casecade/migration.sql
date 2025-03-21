-- DropForeignKey
ALTER TABLE "location_attributes" DROP CONSTRAINT "location_attributes_location_id_fkey";

-- DropForeignKey
ALTER TABLE "location_tours" DROP CONSTRAINT "location_tours_location_attr_id_fkey";

-- DropForeignKey
ALTER TABLE "location_tours" DROP CONSTRAINT "location_tours_location_id_fkey";

-- AddForeignKey
ALTER TABLE "location_attributes" ADD CONSTRAINT "location_attributes_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_location_attr_id_fkey" FOREIGN KEY ("location_attr_id") REFERENCES "location_attributes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
