"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion"
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
const testimonials = [
  {
    id: 1,
    name: "Ethan Davis",
    profession: "MD Plastic Surgeon",
    location: "California",
    image: "/Images/Testimonials1.webp"
  },
  {
    id: 2,
    name: "Olivia Patel",
    profession: "MD Plastic Surgeon",
    location: "California",
    image: "/Images/Testimonial3.webp",
  },
  {
    id: 3,
    name: "Amelia Clarke",
    profession: "MD Plastic Surgeon",
    location: "California",
    image: "/Images/Testimonials2.webp",
  },

];
const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  return (
    <div
      ref={ref}
      className="w-full bg-white"
    >
      <div className="Container pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className={`relative w-max  mx-auto`} >
          <h1 className="overflow-hidden border-orange whitespace-nowrap mx-auto text-[#26262B] font-[700]  text-[40px] md:tracking-[6.5px] tracking-[2px] min-h-[60px]">
            TESTIMONIALS
          </h1>
          <span className="sp1 sp"></span>
          <span className="sp2 sp"></span>
          <span className="sp3 sp"></span>
          <span className="sp4 sp"></span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }} className="text-[#29292C] text-[20px] md:text-[30px] text-center mt-[20px] font-[300]">
          Discover the Impact!
        </motion.p>
        <div className="mt-[45px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-[35px] gap-y-20 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.4 }}

              key={testimonial.id}
              className={`lg:h-full max-w-[550px] 3xl:pl-10 col-span-1 md:col-span-2 lg:col-span-1 group ${idx === 2 ? "md:col-start-2" : ""
                }`}
            >

              <div className="relative aspect-[6/8] group-hover:scale-105 group-hover:-translate-y-5 duration-200">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="100vw"

                  className="object-cover absolute top-30 z-10 "
                />

                <div className="w-full h-full absolute top-5 -left-5 group-hover:opacity-0 duration-200 ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="100vw"
                    className="object-cover blur-xl  "
                  />
                </div>

              </div>

              <div className="text-center mt-[60px] group-hover:-translate-y-10 duration-200">
                <Link
                  href="#"
                  className="text-[#26262A] text-[30px] font-medium duration-200"
                >
                  {testimonial.name}
                </Link>
                <p className="text-[#727272] text-[20px] font-light">
                  {testimonial.profession}
                </p>
                <p className="flex items-center justify-center gap-[5px] text-[#26262A] text-[20px] font-[500] mt-[7.5px]">
                  <Image src={"/icons/Location.svg"} width={20} height={20} alt="location" />
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
