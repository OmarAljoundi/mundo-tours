'use client'
import { useCookies } from 'next-client-cookies'
import React, { useMemo } from 'react'
import { VisaInfo, visaKsaData, visaOmanData } from './data'
interface VisaCardProps {
  visa: VisaInfo
}

const VisaCard: React.FC<VisaCardProps> = ({ visa }) => {
  const cookies = useCookies()

  const convertCurrecny = useMemo(() => {
    const isOman = cookies.get('currency') == 'OMR'
    if (isOman) return ' ر.ع '
    else return ' ر.س '
  }, [cookies.get('currency')])

  return (
    <div className="shadow-card">
      <div className="grid p-3 justify-items-start">
        <img src={visa.image} alt={visa.title} />
        <h3 className="font-bold mt-3 text-3xl">{visa.title}</h3>
        <p className="font-normal mt-3 text-right">
          {visa.onlineApplication
            ? 'يتم التقديم اونلاين ' + (visa.presenceRequired ? 'و يتطلب الحضور للمقابلة' : 'و لا يتطلب الحضور')
            : 'يتطلب الحضور في السفارة او مركز التاشيرات للبصمة'}
        </p>
        <p className="font-normal mt-6 text-right">
          <span className="text-primary">مدة التاشيرة: </span>
          {visa.duration}
        </p>

        <h3 className="font-bold mt-3 text-right text-2xl" dir="rtl">
          المتطلبات الرئيسيــــة:
        </h3>
        <ul className="text-right list-disc ps-4 py-1" dir="rtl">
          {visa.requirements.map((req: string, index: number) => (
            <li key={index} className="font-normal">
              {req}
            </li>
          ))}
        </ul>

        {visa.feesSections && (
          <div className="w-full mt-6">
            <h3 className="font-bold text-center mb-4 text-primary text-2xl" dir="rtl">
              رسوم التاشيرة في قسمين
            </h3>
            <div className="grid ">
              {visa.feesSections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <button className="bg-secondary/50 text-white py-2 rounded-lg">{section.title}</button>
                  <ul className="list-disc ps-4 py-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="font-bold text-right mt-2" dir="rtl">
                        {item}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        <h4 className="font-normal mt-3 text-xl">
          <span className="font-bold pe-3">سعر التأشيرة</span>
          <span className="english-font text-primary">{visa.price}</span>
          <span className="text-primary">{convertCurrecny}</span>
        </h4>

        {(visa.discountText || visa.discountedPrice) && (
          <div className="rounded-xl w-full py-1 px-3 mt-2">
            <p className="font-bold mt-3 text-right bg-secondary/50 p-4 rounded-md">
              {visa.discountText}{' '}
              {visa.discountedPrice && (
                <>
                  <span className="text-primary english-font">{visa.discountedPrice}</span>
                  <span className="text-primary"> {convertCurrecny} </span>
                </>
              )}
              {!visa.discountedPrice && <span className="text-primary"> مجانا </span>}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function VisaLayout() {
  const cookies = useCookies()
  const visaData = useMemo(() => {
    const isOman = cookies.get('currency') == 'OMR'
    if (isOman) return visaOmanData
    else return visaKsaData
  }, [cookies.get('currency')])

  return (
    <div className="container mt-8 lg:mt-4 font-primary">
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-4 lg:col-span-2 space-y-5">
          <VisaCard visa={visaData[0]} />
          <VisaCard visa={visaData[1]} />
        </div>
        <div className="col-span-4 lg:col-span-2">
          <VisaCard visa={visaData[2]} />
        </div>
        <div className="col-span-4">
          <VisaCard visa={visaData[3]} />
        </div>
      </div>
    </div>
  )
}
