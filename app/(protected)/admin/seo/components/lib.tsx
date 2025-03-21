import { Home, Info, Map, LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { SettingSchema } from "@/schema/setting-schema";

export const seoMenuItems: Record<
  "HomeSeo" | "AboutUs" | "AllTours",
  {
    icon: LucideIcon | IconType;
    value: string;
    schemaKey: keyof SettingSchema;
    title: string;
    description: string;
  }
> = {
  HomeSeo: {
    icon: Home,
    value: "Home Page SEO",
    schemaKey: "seoStaticPagesHome",
    title: "Home Page SEO Configuration",
    description:
      "Optimize your homepage visibility with targeted meta titles, descriptions, and keywords that improve search rankings and drive more traffic.",
  },

  AboutUs: {
    icon: Info,
    value: "About Us SEO",
    schemaKey: "seoStaticPagesAboutUs",
    title: "About Us Page SEO Configuration",
    description:
      "Enhance your company profile page with strategic SEO elements that build credibility and help potential customers discover your brand story.",
  },

  AllTours: {
    icon: Map,
    value: "Tours Catalog SEO",
    schemaKey: "seoStaticPagesAllTours",
    title: "Tours Listing SEO Configuration",
    description:
      "Maximize the discoverability of your tour offerings with optimized metadata that highlights your unique experiences and attracts targeted traffic.",
  },
};
