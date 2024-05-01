"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion"
export default function App() {

  const swiperImg = [
    {
      poster: "/Images/GettinStarted/1.png",
      src: "/Images/GettinStarted/1.png",
      mobile: "/Images/GettinStarted/PhoneS1.webp"
    },
    {
      poster: "/Images/GettinStarted/2.png",
      src: "/Images/GettinStarted/2.png",
      mobile: "/Images/GettinStarted/PhoneS2.webp"

    },
    {
      poster: "/Images/GettinStarted/3.png",
      src: "/Images/GettinStarted/3.png",
      mobile: "/Images/GettinStarted/PhoneS3.webp"

    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null);
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setCurrentSlide(swiperRef.current.swiper.activeIndex);
    }
  };
  const changeSlide = (idx: number) => {
    setCurrentSlide(idx)
    swiperRef.current?.swiper?.slideTo(idx)
  }
  const swiper = useSwiper();

  const [isMob, setIsMob] = useState(false);
  return (
    <>
      <div className="Container px-4  flex md:justify-center 3xl:scale-125 3xl:py-[60px] 4xl:scale-150 4xl:py-[95px]   my-[88px] gap-4 md:0 justify-between select-none">
        <div className="flex flex-col items-center gap-2 relative cursor-pointer" onClick={() => changeSlide(0)}>
          <motion.strong
            animate={currentSlide === 0 ? { scale: 1.3 } : { scale: 1 }}
            className={`text-[60px] font-semibold ${currentSlide === 0 ? "!text-[#3634a3]" : "text-[#e0e0e0]"
              }`}
          >
            1
          </motion.strong>
          <span
            className={`h-2 rounded-full w-14 bg-[#e0e0e0] ${currentSlide === 0 && " !bg-[#3634a3]"
              }`}
          ></span>
          <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-[42px] whitespace-nowrap md:block text-xs md:text-base  ${currentSlide === 0 ? "text-CMGRAY font-semibold" : "font-light"
              }`}
          >
            Download it for free
          </span>
        </div>

        {currentSlide === 0 ? (
          <div className="translate-x-1 translate-y-[35px] scale-x-[1.2] hidden md:block">
            <Wave />
          </div>
        ) : (
          <span className="w-[220px] h-1 bg-[#e0e0e0] self-end -translate-y-[5px]  hidden md:block fade-in-text"></span>
        )}

        <div className="flex flex-col items-center gap-2 relative cursor-pointer" onClick={() => changeSlide(1)} >
          <motion.strong animate={currentSlide === 1 ? { scale: 1.3 } : { scale: 1 }}
            className={`text-[60px] font-semibold text-[#e0e0e0] ${currentSlide === 1 && "!text-[#3634a3]"
              }`}
          >
            2
          </motion.strong>
          <span
            className={`h-2 rounded-full w-14  ${currentSlide === 1 ? " !bg-[#3634a3]" : "bg-[#e0e0e0]"
              }`}
          ></span>
          <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-[42px] whitespace-nowrap md:block text-xs md:text-base  ${currentSlide === 1 ? "text-CMGRAY font-semibold" : "font-light"
              }`}
          >
            Make a Profile

          </span>
        </div>

        {currentSlide === 1 ? (
          <div className="translate-x-1 translate-y-[35px] scale-x-[1.2]  hidden md:block">
            <Wave className="" />
          </div>
        ) : (
          <span className="w-[220px] h-1 bg-[#e0e0e0] self-end -translate-y-[5px]  hidden md:block fade-in-text"></span>
        )}

        <div className="flex flex-col items-center gap-2 relative cursor-pointer" onClick={() => changeSlide(2)}>
          <motion.strong animate={currentSlide === 2 ? { scale: 1.3 } : { scale: 1 }}
            className={`text-[60px] font-semibold ${currentSlide === 2 ? "!text-[#3634a3]" : "text-[#e0e0e0] "
              }`}
          >
            3
          </motion.strong>
          <span
            className={`h-2 rounded-full w-14 bg-[#e0e0e0] ${currentSlide === 2 && " !bg-[#3634a3]"
              }`}
          ></span>
          <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-[42px] whitespace-nowrap md:block text-xs md:text-base  ${currentSlide === 2 ? "text-[#26262b] font-semibold" : "font-light"
              }`}
          >
            Enjoy this app
          </span>
        </div>
      </div>
      <div
        className="relative">
        <div className="absolute inset-0 flex justify-center items-center z-[2] pointer-events-none">
          <Image
            src={"/Images/frame/Tablet_frame.png"}
            alt="Tablet_frame"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden md:block"
            style={{ width: "auto", height: "100%" }}
          />
          <Image
            src={"/Images/frame/mobile_frame.png"}
            alt="Tablet_frame"
            width={0}
            height={0}
            sizes="100vw"
            className=" md:hidden"

            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <div className="relative">

          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".NextSlide",
              prevEl: ".PrevSlide",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper relative  rounded-[60px] md:rounded-none p-3 w-full max-w-[270px] md:max-w-[920px] 3xl:max-w-[1180px] 4xl:max-w-[1540px] md:aspect-video h-full   "
            ref={swiperRef}
            onSlideChange={handleSlideChange}
          >

            {swiperImg.map((item, idx) => {
              return (
                <SwiperSlide
                  key={item.poster}
                  className="w-full object-cover rounded-xl overflow-hidden "
                >
                  <Image
                    width={240}
                    height={240}
                    sizes="100vw"
                    alt={item.poster}
                    src={item.poster}
                    className="aspect-video h-full w-full p-4 3xl:p-8 select-none object-contain mx-auto   z-0  hidden md:block"
                  />
                  <Image
                    width={240}
                    height={240}
                    sizes="100vw"
                    alt={item.mobile}
                    src={item.mobile}
                    className="h-[570px] p-1 w-[270px] select-none object-contain mx-auto   z-0   md:hidden"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button onClick={() => swiper.slidePrev()} className="PrevSlide h-[74px] w-[40px] absolute top-1/2  left-[10%] 4xl:left-[5%] 4xl:scale-150 transform  -translate-y-1/2   z-40 hidden lg:block disabled:cursor-not-allowed">
            <div className="h-[74px] w-[40px] relative">
              <Image src={'/icons/ChevronLeft.svg'} fill alt="chevron" />
            </div>

          </button>
          <button onClick={() => swiper.slideNext()} className="NextSlide h-[74px] w-[40px] absolute rotate-180 right-[10%]  4xl:right-[5%] 4xl:scale-150 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block disabled:cursor-not-allowed">
            <div className="h-[74px] w-[40px] relative">
              <Image src={'/icons/ChevronLeft.svg'} fill alt="chevron" />
            </div>

          </button>
        </div>

      </div>


    </>
  );
}

const Wave = ({ className, active = true }: { className?: string, active?: boolean }) => {
  return (
    <svg
      width="219"
      height="77"
      viewBox="0 0 219 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, active ? "fade-in-text" : "opacity-0")}
    >
      <path
        id="Vector 15"
        d="M1.11406 66.0514C4.22364 51.6949 7.68968 33.1296 22.52 35.768C41.0579 39.066 49.7031 56.031 61.3858 51.3355C73.875 46.3159 72.0452 30.1415 72.9996 16.3821C73.886 3.6038 90.693 -11.5516 111.818 18.8391C137.341 52.3228 183.349 97.3639 218.535 63.6137"
        stroke="url(#paint0_linear_0_125)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_125"
          x1="6.71472"
          y1="63.7667"
          x2="177.255"
          y2="-7.91354"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3634A3" />
          <stop offset="1" stopColor="#3634A3" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
