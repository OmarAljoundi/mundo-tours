import Image from 'next/image'

const data = [
  {
    title: 'اختيارك أولاً',
    description: 'شعارنا هو (أنت اختار) يمكنك اختيار رحلتك كم تناسبك ولدينا كل خيارات السفر مما يوفر عليك الوقت ويقلل المتاعب',
    src: '/imgs/finger-snap.png',
  },
  {
    title: 'أفضل قيمة',
    description: 'نضمن لك أكبر استفادة من خدماتنا الممتازة بأسعار تنافسية لا مثيل لها',
    src: '/imgs/commission.png',
  },
  {
    title: 'خدمة مستمرة',
    description: 'لراحة بال عملائنا، نحن متاحين للمساعدة على مدار الساعة طوال الأسبوع',
    src: '/imgs/customer-service-(1).png',
  },
]

const HowWorks = () => {
  return (
    <div className="container">
      <div className="mt-4 relative grid md:grid-cols-3 gap-20">
        <img className="hidden md:block absolute inset-x-0 top-10" src="/imgs/vector.svg" alt="" />
        {data.map((item) => (
          <div className="relative flex flex-col items-center max-w-xs mx-auto" key={item.title}>
            <div className="nc-NcImage dark:hidden block mb-8 max-w-[200px] mx-auto">
              <div className="w-16 h-16 shadow-sm bg-white border border-border p-1.5 rounded-2xl flex items-center justify-center  transition-all duration-500">
                <Image src={item.src} width={60} height={60} quality={100} alt={item.title} />
              </div>
            </div>
            <div className="text-center mt-auto">
              <h3 className="text-xl font-primary font-bold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400 font-primary">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWorks
