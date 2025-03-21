import {
  Mona_Sans,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import localFont from "next/font/local";

const notoSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic-body",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic-header",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-english",
});
const alfont = localFont({
  src: [
    {
      path: "./font/alfont_com_AlFont_com_Swissra-Bold.otf",
      weight: "700",
    },
    {
      path: "./font/alfont_com_AlFont_com_Swissra-Condensed-Heavy-1.otf",
      weight: "900",
    },
    {
      path: "./font/alfont_com_AlFont_com_Swissra-Normal-1.otf",
      weight: "400",
    },
    {
      path: "./font/alfont_com_AlFont_com_Swissra-Thin-1.otf",
      weight: "100",
    },
  ],
  variable: "--font-primary",
});

const saudiRiyal = localFont({
  src: "./font/saudi_riyal.ttf",
  variable: "--font-saudi-riyal",
});

const englishFont = localFont({
  src: "./font/Montserrat-SemiBold.ttf",
  variable: "--font-english",
});

const shekari = localFont({
  src: "./font/shekari.ttf",
  variable: "--font-secondary",
});

export {
  notoSans,
  notoKufiArabic,
  alfont,
  englishFont,
  shekari,
  monaSans,
  saudiRiyal,
};
