"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PricingToggle from "../PricingToggle";
import { motion, useInView } from "framer-motion"

const cardsData = [
  {
    id: 1,
    bgColor: "#83ECFF",
    imgSrc: "/Images/Pricing/Pig.svg",
    text: "All Premium Options Only For 5 Patients",
    textColor: "#0B0A66",
    title: "Free",
    innerBgColor: "#5DE6FF",
    priceItem: { monthly: '0', yearly: '0' },
    description: [
      {
        text: "One location",
      },
      {
        text: "Basic Editing Tools",
      },
      {
        text: "Only For 5 Patients",
      },
    ],
  },
  {
    id: 2,
    bgColor: "#4E4CBD",
    imgSrc: "/Images/Pricing/Coin.svg",
    text: "All premium options only for 5 patients",
    textColor: "#fff",
    title: "Basic",
    priceItem: { monthly: '25', yearly: '20' },
    innerBgColor: "#3634A3",
    description: [
      {
        text: "One location",
      },
      {
        text: "Up to three additional",
      },
      {
        text: "Providers",
      },
      {
        text: "Basic Editing Tools ",
      },
      // {
      //   text: "Additional $200 for More locations",
      // }
    ],
  },
  {
    id: 3,
    bgColor: "#FFCF43",
    imgSrc: '/Images/Pricing/Shop.svg',
    text: "All premium options only for 5 patients",
    textColor: "#fff",
    title: "Premium",
    priceItem: { monthly: '37', yearly: '30' },
    innerBgColor: "#FBBC04",
    description: [
      {
        text: "One location",
      },
      {
        text: "Unlimited patients",
      },
      {
        text: "Photo enhancer",
      },
      // {
      //   text: `
      //   If the user wants to add other locations, three locations, three will be an additional $300 cost
      //   `,
      // }
    ],
  },

];
export function Pricing() {
  const [active, setActive] = useState<boolean>(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  return (
    <div id="Pricing" className="bg-[#fff] relative pt-12">
      <div className="bg-white">
        <div ref={ref} className="Container">
          <div className="pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, } : { opacity: 0, }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className={`relative mx-auto w-max`}>
              <h1 className="overflow-hidden border-orange whitespace-nowrap mx-auto letter-spacing-[.15em]  text-[#26262B] font-[700]  text-[40px] tracking-[6.5px] min-h-[60px] 3xl:text-[62px]">
                PRICING
              </h1>
              <span className="sp1 sp"></span>
              <span className="sp2 sp"></span>
              <span className="sp3 sp"></span>
              <span className="sp4 sp"></span>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, }}
            animate={isInView ? { opacity: 1, } : { opacity: 0, }}
            transition={{ duration: 0.4, delay: 0.3 }} className="text-[#29292C] lg:text-[30px] font-light text-center 3xl:text-4xl"> Download and test MediShots for free.</motion.p>
          <div className="w-fit mx-auto mt-7 3xl:scale-150 3xl:py-6"><PricingToggle toggle={(e) => setActive(e)} /></div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 mt-[105px] gap-y-32 gap-x-6 items-center" >
            {cardsData.map((card, idx) => (
              <motion.div
                key={card.id}
                animate={isInView || active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: idx * 0.4 }}
                className={`rounded-[18px] flex flex-col group items-center relative h-[475px] max-w-[421px] 3xl:max-w-[500px] w-full col-span-1 md:col-span-2 lg:col-span-1 mx-auto ${idx === 2 ? "md:col-start-2" : ""}`}
              >
                <div className="absolute w-[calc(100%-74px)] inset-y-0 rounded-[18px] z-[0]" style={{ backgroundColor: card.bgColor }}></div>
                <div style={{ backgroundColor: card.innerBgColor }} className={`w-[153px] h-[153px] absolute z-10 -top-10 rounded-full flex items-center justify-center `}>
                  <div
                    className="w-[80px] h-[80px]  rounded-full relative">
                    <Image
                      src={card.imgSrc}
                      alt={`card-${card.id}`}
                      fill
                      className="object-contain z-[1]"
                    />
                  </div>
                </div>
                <div
                  className="w-[100%] h-[288px] rounded-[18px] py-[15px] px-6 lg:px-[40px] mt-[120px] static z-[1]"
                  style={{ backgroundColor: card.innerBgColor }}>
                  <p className="text-[30px] text-center text-[#fff] font-bold">
                    {card.title}
                  </p>
                  {card.description?.map((item, idx) => (
                    <div key={idx} className="py-1.5">
                      <p style={{ color: card.textColor }} className={`text-center text-[20px] font-[300] leading-[30px]`}>
                        {item.text}
                      </p>
                      {/* Add the SVG only for lines except the last one */}
                      {idx < card.description.length - 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1"
                          viewBox="0 0 352 1"
                          fill="none"
                          className="mx-auto w-[80%]"
                        >
                          <path
                            d="M0.963226 0.453125H351.037"
                            stroke="url(#paint0_linear_0_697)"
                            strokeWidth="0.5"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_697"
                              x1="7.50868"
                              y1="1.46846"
                              x2="362.685"
                              y2="1.46909"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0" />
                              <stop offset="0.494792" stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <p className="flex  justify-between px-[20px] static z-[1] w-[calc(100%-74px)]">
                  <div className="flex items-center justify-center w-full">
                    {card.priceItem && ( // Check if priceItem exists
                      <span className="text-[40px] text-[#fff] font-[300]">
                        ${active ? `${card.priceItem.monthly}` : `${card.priceItem.yearly}`}
                      </span>
                    )}
                  </div>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Pricing;