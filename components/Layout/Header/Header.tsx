"use client"
import { useDimensions } from '@/util/hook/useDimensions';
import { useCycle, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import HeaderLinks from './HeaderLinks';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Image from 'next/image';
import { Link as ReactScroll } from 'react-scroll';

function Header() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [scrolled, setscroll] = useState(false);
    const [active, setactive] = useState(false);

    useEffect(() => {
        const changecolor = () => {
            if (window.scrollY >= 50) {
                setscroll(true);
            } else {
                setscroll(false);
            }
        };
        window.addEventListener("scroll", changecolor);
    });
    const HumbergerHandler = () => {
        setactive(!active);
    };
    return (
        <div className={`w-full fixed  top-0   ${scrolled ? `bg-white lg:bg-white/85 lg:backdrop-blur-lg ${active ? "shadow" : scrolled && !active ? "shadow" : ""} ` : "bg-white lg:bg-transparent"} duration-200 z-50 `}>
            <motion.div
                animate={scrolled ? { marginTop: 10, marginBottom: 10 } : { marginTop: 30, marginBottom: 30 }}
                className={`Container `}>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-10'>
                        <ReactScroll
                            to={"Hero"}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='flex items-center gap-4 cursor-pointer'>
                            <motion.div
                                animate={scrolled ? { scale: 0.8 } : { scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className=' w-[60px] h-[60px] relative'>
                                <Image src={"/Logo/Logo.svg"} fill className='object-contain' alt='Logo' />
                            </motion.div>
                            <motion.div
                                animate={scrolled ? { translateX: -30, opacity: 0, scale: 0.8 } : { translateX: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}

                                className='w-[190px] h-[35px] relative'>
                                <Image src={"/Logo/Text.svg"} fill className='object-contain' alt='text' />
                            </motion.div>
                        </ReactScroll>
                        <motion.div
                            animate={scrolled ? { translateX: -200, } : { translateX: 0, }}
                            transition={scrolled ? { delay: 0.2, duration: 0.5 } : { delay: 0, duration: 0.5 }}
                            className='h-full py-4  items-center hidden lg:flex '>
                            <HeaderLinks />
                        </motion.div>
                    </div>
                    <div
                        className="lg:hidden"
                    >
                        <div
                            onClick={HumbergerHandler}
                            className={` lg:hidden hamburger hamburger--collapse  cursor-pointer ${active ? "is-active" : ""
                                }`}
                        >
                            <div className="hamburger-box">
                                <div
                                    className={`hamburger-inner bg-[#3634A3] after:bg-[#3634A3] before:bg-[#3634A3]`}
                                ></div>
                            </div>
                        </div>

                    </div>
                    <div className={`absolute w-full ${active ? "top-full" : "-top-[300%]"} duration-500  left-0 bg-white/85 backdrop-blur-lg shadow py-6`}>
                        <HeaderLinks toggle={HumbergerHandler} />
                    </div>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className='max-w-[170px] hidden lg:block '>
                        <PrimaryBtn  >
                            Download Now
                        </PrimaryBtn>
                    </motion.div>
                </div>

            </motion.div>
        </div >
    )
}

export default Header