-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "contact_method" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tour_id" INTEGER,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" JSONB,
    "is_active" BOOLEAN,
    "is_office" BOOLEAN,
    "show_on_service" BOOLEAN NOT NULL DEFAULT true,
    "show_on_europe" BOOLEAN NOT NULL DEFAULT false,
    "seo" JSONB,
    "slug" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_attributes" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "order" INTEGER,
    "seo" JSONB,
    "location_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_tours" (
    "id" SERIAL NOT NULL,
    "location_id" INTEGER NOT NULL,
    "location_attr_id" INTEGER NOT NULL,
    "tour_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_tours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "office" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "contact_number" TEXT,
    "email" TEXT,
    "logo" TEXT,
    "slug" TEXT,
    "currency" TEXT NOT NULL,
    "best_tours" INTEGER[],
    "primary_color" TEXT,
    "secondary_color" TEXT,
    "third_color" TEXT,
    "bg_primary_color" TEXT,
    "bg_secondary_color" TEXT,
    "primary_font" TEXT,
    "social_media" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "seo" JSONB,
    "status" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "office_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tour" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number_of_days" INTEGER NOT NULL,
    "code" TEXT,
    "slug" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "seo" JSONB,
    "is_active" BOOLEAN,
    "is_ticket_included" BOOLEAN,
    "start_day" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "price_single" DOUBLE PRECISION,
    "price_double" DOUBLE PRECISION,
    "price_single_sa" DOUBLE PRECISION,
    "price_double_sa" DOUBLE PRECISION,
    "tour_prices" JSONB[],
    "tour_countries" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tour_hotels" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tour_includes" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "tour_excludes" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "tour_sections" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "airpot_coming" TEXT NOT NULL,
    "airpot_going" TEXT NOT NULL,
    "additional_Info" TEXT NOT NULL,
    "additional_service" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "external_file" JSONB,
    "type_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tour_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT NOT NULL,
    "show_on_service" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tour_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_attributes" ADD CONSTRAINT "location_attributes_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_location_attr_id_fkey" FOREIGN KEY ("location_attr_id") REFERENCES "location_attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_tours" ADD CONSTRAINT "location_tours_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tour" ADD CONSTRAINT "tour_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "tour_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
