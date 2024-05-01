"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import StartedSlider from '@/components/StartedSlider';
import Download from '../Download';
function GettingStarted() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    return (
        <div className="w-full bg-[#FAFAFA]">
            <div id="How to Get Started" className='w-full bg-[#FAFAFA]'>
                <div className='Container pt-[90px] '>
                    <div ref={ref} className='w-full flex flex-col gap-8 justify-center items-center md:items-start md:justify-start z-0'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className={`md:ml-4 relative w-max flex items-center gap-2 z-0 `}>
                            <h1 className="uppercase text-CMGRAY overflow-hidden border-orange whitespace-nowrap mx-auto font-black  text-[32px] sm:text-[54px] 3xl:text-[62px] tracking-[2.9px] ">
                                Getting
                            </h1>
                            <span className='uppercase text-3xl font-light tracking-[1.7px]'>Started</span>
                            <span className="sp1 sp"></span>
                            <span className="sp2 sp"></span>
                            <span className="sp3 sp"></span>
                            <span className="sp4 sp"></span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className='text-2xl md:text-3xl font-light 3xl:text-4xl text-CMGRAY'>
                            {`Let's explore how to skillfully manage medical photos and patient records with simple, user-friendly steps. `}
                        </motion.p>
                    </div>
                    <StartedSlider />
                </div>
            </div>
            <Download />
        </div>
    )
}

export default GettingStarted