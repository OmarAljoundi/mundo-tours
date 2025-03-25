/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const serviceFeatures = [
  {
    title: "اختيارك أولاً",
    description:
      "شعارنا هو (أنت اختار) يمكنك اختيار رحلتك كم تناسبك ولدينا كل خيارات السفر مما يوفر عليك الوقت ويقلل المتاعب",
    src: "/images/finger-snap.png",
    alt: "إيقونة تمثل حرية الاختيار",
  },
  {
    title: "أفضل قيمة",
    description:
      "نضمن لك أكبر استفادة من خدماتنا الممتازة بأسعار تنافسية لا مثيل لها",
    src: "/images/commission.png",
    alt: "إيقونة تمثل القيمة المضافة",
  },
  {
    title: "خدمة مستمرة",
    description:
      "لراحة بال عملائنا، نحن متاحين للمساعدة على مدار الساعة طوال الأسبوع",
    src: "/images/customer-service-(1).png",
    alt: "إيقونة تمثل خدمة العملاء",
  },
];

const HowWorks = () => {
  return (
    <section className="container" aria-labelledby="how-it-works-heading">
      <h2 id="how-it-works-heading" className="sr-only">
        كيف تعمل خدماتنا
      </h2>

      <div className="mt-4 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src="/images/vector.svg"
          alt="خط توضيحي يربط بين مراحل الخدمة"
          role="presentation"
        />

        {serviceFeatures.map((feature, index) => (
          <article
            className="relative flex flex-col items-center max-w-xs mx-auto"
            key={feature.title}
          >
            <figure className="nc-NcImage dark:hidden block mb-8 max-w-[200px] mx-auto">
              <div
                className="w-16 h-16 shadow-sm bg-white border border-border p-1.5 rounded-2xl flex items-center justify-center transition-all duration-500"
                aria-hidden="true"
              >
                <Image
                  src={feature.src}
                  width={60}
                  height={60}
                  quality={100}
                  alt={feature.alt}
                />
              </div>
            </figure>

            <div className="text-center mt-auto">
              <h3 className="text-xl font-primary font-bold">
                {feature.title}
              </h3>
              <p className="block mt-5 text-neutral-500 dark:text-neutral-400 font-primary">
                {feature.description}
              </p>
            </div>

            <span className="sr-only">
              ميزة {index + 1} من {serviceFeatures.length}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
