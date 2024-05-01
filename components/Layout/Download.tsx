import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useMouse } from '@uidotdev/usehooks';
function Download() {

    const [mouse, ref] = useMouse();
    const xIntersecting = mouse.elementX > 0 && mouse.elementX < 450;
    const yIntersecting = mouse.elementY > 0 && mouse.elementY < 350;
    const isIntersecting = xIntersecting && yIntersecting;
    return (
        <div >
            <div className="w-full md:w-[1550px] 4xl:w-[1920px]  aspect-[6/5] relative max-w-full -ml-[30px]">
                <Image src={"/Images/BackgrounDownload.png"} className="object-contain" alt="download" fill />
            </div>
            <div className="Container" >
                <div id='Download' className="flex flex-col w-full  md:w-fit ml-auto relative   mt-[42px] md:mt-0 xl:-translate-y-[300px] xl:-mb-[230px] items-center md:items-start   cursor-default">
                    <div
                        ref={ref as any}
                        className='relative  md:w-[450px] group'>


                        <motion.div animate={{ x: mouse.elementX - 80, opacity: isIntersecting ? 1 : 0 }} className='-top-10 w-[180px] h-[180px]  absolute rounded-full mix-blend-plus-lighter bg-[#5DE6FF]   z-20 opacity-0 group-hover:opacity-100 duration-150  '></motion.div>

                        <div
                            className={`relative w-fit mx-auto md:mx-0 md:translate-x-[20px]`}>
                            <h1 className="overflow-hidden border-orange whitespace-nowrap mx-auto letter-spacing-[.15em]  text-[#26262B] font-black  text-[40px] lg:text-[58px] tracking-[6.5px] min-h-[60px] 4xl:text-[62px]">
                                DOWNLOAD
                            </h1>
                            <span className="sp1 sp"></span>
                            <span className="sp2 sp"></span>
                            <span className="sp3 sp"></span>
                            <span className="sp4 sp"></span>
                        </div>

                        <p className="pt-6 text-xl lg:text-3xl 4xl:text-4xl font-light whitespace-nowrap text-CMGRAY">
                            Download and test MediShots for free.
                        </p>
                    </div>
                    <div className="mb-24 mt-12  md:mt-12 ">
                        <div className="flex gap-y-4 w-full justify-center gap-4 flex-col md:flex-row items-center">
                            <Link href="#" className="relative w-[200px] h-[60px]">
                                <Image
                                    fill
                                    src={'/icons/AppleDownload.svg'}
                                    alt="apple-download"
                                    className="object-contain mx-auto"
                                />
                            </Link>
                            <Link href="#" className="relative w-[200px] h-[60px]">
                                <Image
                                    fill
                                    src={"/icons/GoogleDownload.svg"}
                                    alt="apple-download"
                                    className="object-contain mx-auto"
                                />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download