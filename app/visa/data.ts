export interface SchengenFeesSection {
  title: string
  items: string[]
}

export interface VisaInfo {
  id: string
  image: string
  title: string
  onlineApplication: boolean
  presenceRequired: boolean
  duration: string
  requirements: string[]
  price: number
  discountedPrice?: number
  discountText?: string
  feesSections?: SchengenFeesSection[]
}

export const visaOmanData: VisaInfo[] = [
  {
    id: 'uk',
    image: '/imgs/eng.png',
    title: 'تاشيرة بريطانيا',
    onlineApplication: true,
    presenceRequired: false,
    duration: 'على مدة السفر بالظبط',
    requirements: ['صورة من جواز السفر', 'عنوان الإقامة في بريطانيا', 'تاريخ الوصول والمغادرة مع ارقام الرحلات'],
    price: 25,
  },
  {
    id: 'turkey',
    image: '/imgs/turkey.png',
    title: 'تأشيرة تركيا',
    onlineApplication: true,
    presenceRequired: false,
    duration: '6 اشهر متعدد',
    requirements: ['صورة من جواز السفر'],
    price: 30,
    discountedPrice: 20,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون الرسوم',
  },
  {
    id: 'schengen',
    image: '/imgs/eur.png',
    title: 'تأشيرة الشنجن الأوروبيـــة',
    onlineApplication: false,
    presenceRequired: true,
    duration: 'يعتمد على السفارة و تكون متوسط سنه في معظم السفارات تحديد المدة يرجع الى السفارة',
    requirements: ['الجواز الأصل', 'صورتين شخصيات', 'كشف حساب بنكي انجليزي', 'شهادة راتب من العمل (بعض السفارات لا تطلبها)'],
    price: 75,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون رسوم القسم الأول',
    feesSections: [
      {
        title: 'القسم الأول',
        items: [
          'رسوم المكتب: 35 ريال',
          'رسوم حجز الموعد بالفيزا كارد',
          'تامين السفر للسفارة',
          'تعبئة الطلب ( الابلكاشن )',
          'حجز الفندق و الطيران للسفارة',
        ],
      },
      {
        title: 'القسم الثاني',
        items: ['رسوم السفارة: 40 ريال تقريبا', 'رسوم التأشيرة يتم دفعها عن طريق المسافر مباشرة عند التقديم'],
      },
    ],
  },
  {
    id: 'usa',
    image: '/imgs/usa.png',
    title: 'تأشيرة امريكا',
    onlineApplication: true,
    presenceRequired: true,
    duration: 'عشر سنوات متعدد',
    requirements: ['الجواز الأصل', 'صورتين شخصيات', 'كشف حساب بنكي انجليزي', 'شهادة راتب من العمل', 'شهادة راتب من العمل'],
    price: 120,
    discountedPrice: 60,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون الرسوم',
  },
]

export const visaKsaData: VisaInfo[] = [
  {
    id: 'uk',
    image: '/imgs/eng.png',
    title: 'تاشيرة بريطانيا',
    onlineApplication: true,
    presenceRequired: false,
    duration: 'على مدة السفر بالظبط',
    requirements: ['صورة من جواز السفر', 'عنوان الإقامة في بريطانيا', 'تاريخ الوصول والمغادرة مع ارقام الرحلات'],
    price: 244,
  },
  {
    id: 'turkey',
    image: '/imgs/turkey.png',
    title: 'تأشيرة تركيا',
    onlineApplication: true,
    presenceRequired: false,
    duration: '6 اشهر متعدد',
    requirements: ['صورة من جواز السفر'],
    price: 293,
    discountedPrice: 195,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون الرسوم',
  },
  {
    id: 'schengen',
    image: '/imgs/eur.png',
    title: 'تأشيرة الشنجن الأوروبيـــة',
    onlineApplication: false,
    presenceRequired: true,
    duration: 'يعتمد على السفارة و تكون متوسط سنه في معظم السفارات تحديد المدة يرجع الى السفارة',
    requirements: ['الجواز الأصل', 'صورتين شخصيات', 'كشف حساب بنكي انجليزي', 'شهادة راتب من العمل (بعض السفارات لا تطلبها)'],
    price: 732,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون رسوم القسم الأول',
    feesSections: [
      {
        title: 'القسم الأول',
        items: [
          'رسوم المكتب: 341 ريال',
          'رسوم حجز الموعد بالفيزا كارد',
          'تامين السفر للسفارة',
          'تعبئة الطلب ( الابلكاشن )',
          'حجز الفندق و الطيران للسفارة',
        ],
      },
      {
        title: 'القسم الثاني',
        items: ['رسوم السفارة: 390 ريال تقريبا', 'رسوم التأشيرة يتم دفعها عن طريق المسافر مباشرة عند التقديم'],
      },
    ],
  },
  {
    id: 'usa',
    image: '/imgs/usa.png',
    title: 'تأشيرة امريكا',
    onlineApplication: true,
    presenceRequired: true,
    duration: 'عشر سنوات متعدد',
    requirements: ['الجواز الأصل', 'صورتين شخصيات', 'كشف حساب بنكي انجليزي', 'شهادة راتب من العمل', 'شهادة راتب من العمل'],
    price: 1171,
    discountedPrice: 585,
    discountText: 'خصم خاص لعملاء موندو للسياحة عند حجز أي برنامج من موقعنا تكون الرسوم',
  },
]
