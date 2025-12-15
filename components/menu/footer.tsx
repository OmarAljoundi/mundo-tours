"use client";

import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoDocumentsSharp, IoShieldCheckmarkSharp } from "react-icons/io5";

const companyName = "موندو للسياحة";
const mainParagraph = `
موندو للسياحة هي واحدة من أكبر الشركات المتخصصة بالسفر والسياحة التي تعمل تحت شعار ( انت اختار ) نقدم مئات البرامج 
أسبوعيا و يوميا الكثر من 50 دولة حول العالم مع تقديم خيار االختيار للمسافر لمدة و تاريخ و طريقة الرحلة. 
`;

const dammamTitle = "عنوان فرع الدمام";
const dammamLines = [
  "حي المنار - شارع ابو بكر الصديق",
  "مبني الناصر للأعمال",
  "الطابق الرابع مكتب 402",
];
const dammamPhone = "920031910";
const dammamMapUrl = "https://maps.app.goo.gl/rFguX6KNWyrrSLQK7";

const muscatTitle = "عنوان فرع مسقط";
const muscatLines = [
  "العذيبة - شارع 18 نوفمبر",
  "بناية بيت الموسيقي",
  "الطابق الرابع مكتب 402",
];
const muscatMapUrl = "https://maps.app.goo.gl/HP5ty2j5WA56G3oq6";
const muscatPhone = "95929267";

const jeddahTitle = "عنوان فرع جدة";
const jeddahLines = [
  "حي السلامة - شارع صاري",
  "برج مريم",
  "الطابق الثالث مكتب 6",
];
const jeddahMapUrl = "https://maps.app.goo.gl/y4zmnHuAQCENFYS69";
const jeddahPhone = "920031910";

const legalData = {
  title: "بيانات الترخيص الرسمية",
  items: [
    { label: "اسم الشركة:", value: "عالم الاكتشاف للسفر والسياحة" },
    { label: "رقم الترخيص:", value: "73105452", isNum: true },
    { label: "السجل التجاري:", value: "2050201795", isNum: true },
    { label: "فئة الترخيص:", value: "وكالة السفر والسياحة" },
  ],
};

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);
  useLayoutEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      dir="rtl"
      className="bg-gray-100 pt-10 pb-6 font-primary"
    >
      <div className="mx-auto flex container flex-col items-start gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        {/* Sidebar: Logo, Text, Legal Box */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Reverted Image to original props to fix disappearance */}
              <Image
                src="/images/mundo_logo.png"
                alt={companyName}
                width={200}
                height={50}
                sizes="(max-width: 640px) 256px, 256px"
                className="h-[110px] w-[200px]"
              />
            </motion.div>
            <p className="text-right text-gray-600 leading-relaxed text-sm md:text-base font-primary">
              {mainParagraph}
            </p>
          </div>

          <LegalComplianceBox />
        </div>

        {/* Location Cards Wrapper */}
        <div className="flex w-full flex-col gap-5 md:w-2/3 lg:flex-row lg:items-start">
          <LocationCard
            address={jeddahLines}
            name={jeddahTitle}
            phone={jeddahPhone}
            url={jeddahMapUrl}
          />
          <LocationCard
            address={dammamLines}
            name={dammamTitle}
            phone={dammamPhone}
            url={dammamMapUrl}
          />
          <LocationCard
            address={muscatLines}
            name={muscatTitle}
            phone={muscatPhone}
            url={muscatMapUrl}
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container lg:px-8 px-4 sm:px-6 flex flex-col-reverse gap-y-4 sm:flex-row sm:justify-between mt-12 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500 font-primary">
          © <span className="font-english">{currentYear}</span> {companyName}.
          جميع الحقوق محفوظة.
        </p>
        <CommercialRegisterButton />
      </div>
    </motion.footer>
  );
};

export default Footer;

function LegalComplianceBox() {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <IoShieldCheckmarkSharp className="text-blue-600 text-xl" />
        <h3 className="text-base font-bold text-gray-900 font-primary">
          {legalData.title}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {legalData.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0"
          >
            <span className="font-bold text-gray-700 text-sm font-primary">
              {item.label}
            </span>
            <span
              className={`text-gray-900 text-sm mt-1 sm:mt-0 ${
                item.isNum ? "font-english font-semibold" : "font-primary"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationCard({
  name,
  address,
  phone,
  url,
}: {
  name: string;
  address: string[];
  phone: string;
  url: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      // Removed h-full to prevent forced stretching, added h-full only if equal height is strictly needed but with no internal spacing
      className="flex flex-col w-full flex-1 rounded-xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100"
    >
      <h2 className="mb-4 text-lg font-bold text-gray-900 font-primary">
        {name}
      </h2>

      {/* Removed flex-grow to prevent big gaps */}
      <div className="space-y-1 mb-6">
        {address.map((line, idx) => (
          <p key={idx} className="text-gray-600 text-sm leading-6 font-primary">
            {line}
          </p>
        ))}
        <p className="text-gray-600 text-sm leading-6 font-primary pt-2">
          هاتف:{" "}
          <a
            href={`tel:${phone}`}
            className="text-gray-800 hover:text-blue-600 transition-colors font-english font-medium"
            dir="ltr"
          >
            {phone}
          </a>
        </p>
      </div>

      <div className="mt-auto text-right">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#ff4d00] font-bold text-sm hover:opacity-80 transition-opacity font-primary"
        >
          عرض الموقع
        </a>
      </div>
    </motion.div>
  );
}

function CommercialRegisterButton() {
  const fileName = "Commercial-Register.pdf";
  const filePath = "/assets/Commercial-Register.pdf";
  const displayText = "السجل التجاري لموندو للسياحة";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex gap-x-2 items-center cursor-pointer group hover:opacity-80 transition-all duration-300"
      onClick={handleDownload}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleDownload();
        }
      }}
    >
      <IoDocumentsSharp className="text-gray-500 group-hover:text-primary transition-colors" />
      <p className="text-sm text-gray-500 group-hover:text-primary font-primary">
        {displayText}
      </p>
    </div>
  );
}
