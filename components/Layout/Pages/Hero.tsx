"use client"
import React, { useEffect, useState } from 'react'
import RatedApp from '../RatedApp'
import Typewriter from "typewriter-effect";

import { AnimatePresence, motion } from 'framer-motion';
function Hero() {
    const texts = [
        { text: 'Simplify', subtext: "patient communication.", position: { x: "10%", y: "-5%" } },
        { text: '.Privacy', subtext: "and Security.", position: { x: "82%", y: "10%" } },
        { text: '.Unique', subtext: "Templates.", position: { x: "92%", y: "38%" } },
    ];
    const [index, setIndex] = useState(0);
    const textVariants = {
        hidden: { opacity: 0, x: 0, transition: { duration: 0.5 } },
        visible: { opacity: 1, x: 20, transition: { duration: 1 } },
    };
    const nextText = () => {
        if (index < texts.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    useEffect(() => {
        const timeout = setTimeout(nextText, 3000);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);
    return (
        <div id='Hero' className='h-full pt-32 2xl:pt-20    4xl:pt-16 flex items-center justify-between  w-full'>
            <div className='Container flex-1 h-full flex-col lg:flex-row flex items-center justify-between '>
                <div className='lg:min-h-[600px] gap-[80px] flex flex-col justify-between flex-1 h-full  max-w-[430px] order-2 lg:order-1'>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <div className={`relative w-max mx-auto `}>
                            <h1 className=" text-CMGRAY overflow-hidden border-orange whitespace-nowrap mx-auto letter-spacing-[.15em]   font-[700]  text-[42px] sm:text-[54px] tracking-[6.5px] min-h-[42px] 3xl:text-[62px] sm:min-h-[90px]">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "MediShots",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <span className="sp1 sp"></span>
                            <span className="sp2 sp"></span>
                            <span className="sp3 sp"></span>
                            <span className="sp4 sp"></span>
                        </div>
                        <p className='text-2xl lg:text-3xl font-light text-CMGRAY'>Picture Perfect Care, Simplified.</p>
                    </div>
                    <div className='pb-32'>
                        <RatedApp />
                    </div>
                </div>
                <div className='flex-1 w-full order-1 lg:order-2'>
                    {/* Mobile Text */}
                    <div className='w-full min-h-[200px]  lg:hidden relative'>
                        <AnimatePresence>
                            <motion.div
                                key={1}
                                animate={{ opacity: 1, translateX: 0 }}
                                initial={{ opacity: 0, translateX: 20 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className='gradient-text animate-gradient text-transparent text-xl lg:text-2xl flex items-center gap-1 absolute right-0 md:right-10 top-10'

                            >
                                <h1 className='font-black whitespace-nowrap'>{texts[0].text}</h1>
                                <p className='font-light whitespace-nowrap'>{texts[0].subtext}</p>
                            </motion.div>
                            <motion.div
                                key={2}
                                animate={{ opacity: 1, translateX: 0 }}
                                initial={{ opacity: 0, translateX: -20 }}
                                transition={{ delay: 0.3, duration: 1 }}
                                className='gradient-text animate-gradient text-transparent text-xl lg:text-2xl flex items-center gap-1 absolute left-0 md:left-10 top-2/4'

                            >
                                <h1 className='font-black whitespace-nowrap'>{texts[1].text}</h1>
                                <p className='font-light whitespace-nowrap'>{texts[1].subtext}</p>
                            </motion.div>
                            <motion.div
                                key={3}
                                animate={{ opacity: 1, translateX: 0 }}
                                initial={{ opacity: 0, translateX: 20 }}
                                transition={{ delay: 0.3, duration: 1.5 }}
                                className='gradient-text animate-gradient text-transparent text-xl lg:text-2xl flex items-center gap-1 absolute right-0 md:right-10 top-[75%]'
                            >
                                <h2 className='font-black whitespace-nowrap'>{texts[2].text}</h2>
                                <p className='font-light whitespace-nowrap'>{texts[2].subtext}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className='aspect-video 2xl:mt-40 lg:mr-40 3xl:mr-48 4xl::max-w-[1400px]  relative'>
                        <video width="full" height="full" preload="auto" muted loop autoPlay={true}  >
                            <source src="/video/Medishots1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <AnimatePresence mode='wait'>
                            {texts.map((textObj, i) => (
                                i === index && (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={textVariants}
                                        className='gradient-text animate-gradient text-transparent text-2xl 3xl:text-4xl lg:flex items-center gap-1 hidden'

                                        // onAnimationComplete={nextText} // Trigger next text animation when current animation completes
                                        style={{ position: 'absolute', left: textObj.position.x, top: textObj.position.y }}
                                    >
                                        <h1 className='font-black whitespace-nowrap'>{textObj.text}</h1>
                                        <p className='font-light whitespace-nowrap'>{textObj.subtext}</p>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
