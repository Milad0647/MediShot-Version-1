'use client';
import clsx from 'clsx';
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
type Props = {
  title: string,
  imageSrc: string,
  desc: string;
  active: boolean,
  waveLeft?: boolean,
  seq: number,
  changeActive: (activeTitle: string) => void,
  isMob?: boolean,
  RTL?: boolean

}

const degs = ["80deg", "50deg", "20deg"]
function FeatureItem({
  title,
  imageSrc,
  desc,
  changeActive,
  active = false,
  waveLeft = false,
  seq = 0,
  isMob = false,
  RTL
}: Props) {

  return (
    <div className={`flex flex-col ${RTL ? "lg:items-end mr-10" : "items-start"} gap-4  relative  group ` + (!waveLeft && "")} role='button' onClick={() => changeActive(title)}>
      <div className={`absolute top-0 hidden lg:block ${waveLeft ? 'right-full ' : 'left-full scale-x-[-1]'} ${active ? "fade-in-text" : "opacity-0"}`}>
        <Line width={isMob ? 200 : 80} className={`${seq === 0 ? 'rotate-[-80deg]' : seq === 1 ? 'rotate-[-65deg]' : 'rotate-[-40deg]'}`}></Line>
      </div>
      <div className={`aspect-square w-[68px] h-[68px] 3xl:w-[72px] 3xl:h-[72px] ${active ? 'bg-[#5DE6FF]' : ' bg-[#3634a3]'} rounded-full grid place-items-center transition-all`}>
        <Image src={imageSrc} alt="face" width={38} height={38} className={"" + (active && 'convert-white')} />
      </div>
      <div className={`relative grow w-full ${RTL ? "text-end" : ""}`}>
        <motion.span
          animate={active ? { fontWeight: 400 } : { fontWeight: 300 }}
          className={`text-[20px] xl:text-[28px] 3xl:text-4xl whitespace-nowrap`}>{title}</motion.span>
        <div
          className={`absolute  ${seq === 0 ? "bottom-[180%]" : "top-[130%]"} ${RTL && seq === 0 ? "-left-[90px]" : !RTL ? "-right-[90px]" : ""} ${seq !== 0 ? "-left-[50px]" : "-right-[50px]"} bg-white w-full   transition  shadow-xl p-4 rounded-lg z-30 group-hover:opacity-100 opacity-0 duration-200 `}>
          <small className={`text-[#636363] text-lg 3xl:text-lg font-light hidden lg:block`}>
            {desc}
          </small>
        </div>
      </div>
    </div >
  )
}

export default FeatureItem

const Line = ({
  width,
  height,
  className
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <svg width={Number(width) + 10} height={Number(width) + 10} className={clsx(className)} viewBox={`0 0 50 90`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.0691056 1.74786C6.17437 0.822845 13.9454 -0.596408 16.2665 5.76203C19.1679 13.7101 14.7075 19.7532 19.0886 23.7362C23.7722 27.9941 29.4583 24.8091 34.8568 23.1086C39.8703 21.5293 49.3387 25.9869 42.6088 39.0779C35.6966 54.4044 29.0087 79.7125 49.593 88.7383" stroke="url(#paint0_linear_0_540)" />
    <defs>
      <linearGradient id="paint0_linear_0_540" x1="2.18214" y1="3.65216" x2="67.3923" y2="61.2359" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3634A3" />
        <stop offset="1" stopColor="#3634A3" stopOpacity="0.23" />
      </linearGradient>
    </defs>
  </svg>
}