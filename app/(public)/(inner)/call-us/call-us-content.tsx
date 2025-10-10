"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "../about-us/components/common";

interface Branch {
  id: string;
  name: string;
  nameAr: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  hours: string;
  copyUrl: string;
  images: [string, string];
}

const branches: Branch[] = [
  {
    id: "muscat",
    name: "Muscat",
    nameAr: "فرع مسقط",
    address:
      "العذيبة - شارع 18 نوفمبر - مبنى بيت الموسيقى رقم 393 - الطابق الرابع مكتب 402",
    phone: "95929276",
    whatsapp: "95929276",
    copyUrl: "https://maps.app.goo.gl/jGNWfapL7z517jGMA",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d593.8893791326115!2d39.1754!3d21.5093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e01dc526316a5%3A0xe8acf9b4eea6c8ce!2zTXVuZG8gVG91cnMg2YXZiNmG2K_ZiCDZhNmE2LPZitin2K3YqQ!5e1!3m2!1sen!2sjo!4v1760117992535!5m2!1sen!2sjo",
    hours: "السبت الي الخميس من 10 صباحا حتي 10 مساء",
    images: ["/images/Muscat.jpg", "/images/Muscat_2.jpg"],
  },
  {
    id: "dammam",
    name: "Dammam",
    nameAr: "فرع الدمام",
    address:
      "حي المنار - شارع ابو بكر الصديق - مبني الناصر للأعمال - الطابق الرابع مكتب 402",
    phone: "920031910",
    whatsapp: "920031910",
    copyUrl: "https://maps.app.goo.gl/Unb6yeBzHUhjBB5F8",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4574.930726802558!2d50.05310087620896!3d26.381168382729935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd4e4c57f6d5%3A0x69fa55cef5641fa8!2z2LTYsdmD2Kkg2LnYp9mE2YUg2KfZhNin2YPYqti02KfZgSDZhNmE2LPZgdixINmIINin2YTYs9mK2KfYrdipICIgTXVuZG8gdG91cnMgLSDZhdmI2YbYr9mIINmE2YTYs9mK2KfYrdipICI!5e1!3m2!1sen!2sjo!4v1760118265486!5m2!1sen!2sjo",
    hours: "السبت الي الخميس من 10 صباحا حتي 9 مساء",
    images: ["/images/Dammam.jpg", "/images/Dammam_2.jpg"],
  },
  {
    id: "jeddah",
    name: "Jeddah",
    nameAr: "فرع جدة",
    address: "حي السلامة - شارع صاري - برج مريم - الطابق الثالث مكتب رقم 6",
    phone: "920031910",
    whatsapp: "920031910",
    copyUrl: "https://maps.app.goo.gl/y4zmnHuAQCENFYS69?g_st=ipc",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1411.8583920174483!2d39.150068521201916!3d21.576776163361654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM0JzM3LjgiTiAzOcKwMDknMDIuNSJF!5e1!3m2!1sen!2sjo!4v1760118362995!5m2!1sen!2sjo",
    hours: "السبت الي الخميس من 10 صباحا حتي 9 مساء",
    images: ["/images/Jeddah.jpg", "/images/Jeddah_2.jpg"],
  },
];

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageRevealed, setImageRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setImageRevealed(true), 300);
          }, index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative ">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mb-8 lg:mb-12 w-full `}
        >
          <div
            className={`lg:col-span-7 h-[400px] md:h-[600px] relative w-full lg:order-1`}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden  w-full">
              <div className="absolute inset-0 bg-secondary/5" />
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1500 ease-out w-full ${
                  imageRevealed
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${branch.images[0]})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-secondary/30 rounded-bl-3xl" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight font-primary"
                  dir="rtl"
                >
                  {branch.nameAr}
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-5 h-[300px] md:h-[450px] lg:h-auto relative w-full lg:order-2 lg:-ml-12 lg:mt-20`}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-md bg-muted/20 w-full">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1500 delay-300 ease-out w-full ${
                    imageRevealed
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${branch.images[1]})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className={`space-y-6 lg:order-1`} dir="rtl">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider font-primary">
                  العنوان
                </h3>
                <p className="text-lg leading-relaxed text-foreground/90 font-primary">
                  {branch.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider font-primary">
                  الهاتف
                </h3>
                <a
                  href={`tel:${branch.phone}`}
                  className="text-xl font-semibold text-foreground hover:text-secondary transition-colors duration-300"
                  dir="ltr"
                >
                  {branch.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider font-primary">
                  الواتس
                </h3>
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-foreground hover:text-secondary transition-colors duration-300"
                  dir="ltr"
                >
                  {branch.whatsapp}
                </a>
              </div>
            </div>

            <div className="w-full pt-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 via-background to-primary/5 border border-secondary/20 p-6">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full opacity-50" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 rounded-tr-full opacity-50" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-6">
                      <div className="flex-1 text-center">
                        <div className="text-sm font-bold text-secondary/80 mb-2 font-primary">
                          الأيام
                        </div>
                        <div className="text-xl font-semibold text-foreground font-primary">
                          السبت - الخميس
                        </div>
                      </div>
                      <div className="sm:hidden w-3/4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
                      <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
                      <div
                        className="flex-1 text-center sm:text-left"
                        dir="ltr"
                      >
                        <div className="text-sm font-bold text-secondary/80 mb-2 font-primary">
                          الساعات
                        </div>
                        <div className="text-xl font-semibold text-foreground">
                          {branch.hours.includes("10 مساء")
                            ? "10:00 AM - 10:00 PM"
                            : "10:00 AM - 9:00 PM"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:order-2`}>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md border border-border/50 group">
              <iframe
                src={branch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500"
              />
              <a
                href={branch.copyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-primary absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full
                 text-xs md:text-sm font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300  backdrop-blur-sm"
                dir="rtl"
              >
                فتح في خرائط جوجل
              </a>
            </div>
          </div>
        </div>

        {index < branches.length - 1 && (
          <div className="mt-20 mb-12 flex items-center justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="mx-4 w-2 h-2 rounded-full bg-secondary/50" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}

export function CallUsContact() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);
  }, []);

  return (
    <Section className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div
            className={`transition-all duration-1000 text-center mb-10 lg:mb-20 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-primary">
              فروعنا
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-primary">
              نحن في خدمتكم في مواقعنا المتميزة
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {branches.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
