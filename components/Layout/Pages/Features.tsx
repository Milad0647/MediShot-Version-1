"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FeatureItem from "./FeatureItem";
import { motion, useInView } from "framer-motion"
type Props = {};

type Item = {
    imageSrc: string;
    image2cls: string;
    title: string;
    desc: string;
    Mobileimage2cls: string;
};

const items: Item[] = [
    {
        imageSrc: "/icons/Features/Verify.svg",
        image2cls: "bg-[url('/Images/Features/Improvedcompliance.png')]  bg-center",
        Mobileimage2cls: "bg-[url('/Images/Features/Phone/Improvedcompliance.png')]  bg-center",
        title: "Improved Compliance",
        desc: "MediShots enables healthcare professionals to securely capture patient photos, sign consent forms on mobile devices, and comply with HIPAA and privacy regulations by providing the necessary tools for secure storage and sharing of patient photos.",
    },
    {
        imageSrc: "/icons/Features/Coin.svg",
        image2cls: "bg-[url('/Images/Features/Increaseincome.png')]  bg-center",
        Mobileimage2cls: "bg-[url('/Images/Features/Phone/Increaseincome.png')]  bg-center",
        title: "Increase Income",
        desc: "MediShots can boost doctors' income by improving patients’ engagement and the conversion rate of referrals to medical service cases. It achieves this by providing patients with visual representations of potential results, offering versatile photo templates, easy sharing, and convenient printing. ",
    },
    {
        imageSrc: "/icons/Features/Person.svg",
        image2cls: "bg-[url('/Images/Features/Enhancedpatientcare.png')]  bg-center",
        Mobileimage2cls: "bg-[url('/Images/Features/Phone/Enhancedpatientcare.png')]  bg-center",
        title: "Enhanced Patient Care",

        desc: "MediShots makes patient care better by giving healthcare providers helpful tools for taking and sharing clinical photos. Our AI can find potential issues. You can easily share photos, create visual treatment presentations, edit photos, access a photo library, and use telemedicine, all to provide the best care for your patients.",
    },
    {
        imageSrc: "/icons/Features/Indicator.svg",
        image2cls: "bg-[url('/Images/Features/Increasedefficiency.png')]  bg-center",
        Mobileimage2cls: "bg-[url('/Images/Features/Phone/Increasedefficiency.png')]  bg-center",
        title: "Increased Efficiency",
        desc: "MediShots is your solution for saving time and improving efficiency in clinical photography. Our on-screen leveling tools and photo ghosting features ensure standardized photos, while templates and photo-sequencing streamline your sessions. With mobile app and tablet compatibility, our solution captures all necessary photos in one session, simplifying and enhancing your workflow.",
    },
];

function Features({ }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    const [activeIdx, setActiveIdx] = useState(0);
    const [active, setActive] = useState(items[activeIdx].title);
    const [manualInteraction, setManualInteraction] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!manualInteraction) {
                setActiveIdx((prevIdx) => (prevIdx + 1) % items.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [manualInteraction]);

    useEffect(() => {
        setActive(items[activeIdx].title);
    }, [activeIdx]);

    const changeActive = (activeTitle: string) => {
        const idx = items.findIndex((q) => q.title === activeTitle);
        setActiveIdx(idx !== -1 ? idx : 0);
        setActive(activeTitle);
        setManualInteraction(true); // Set manual interaction to true when user manually changes active item
        setTimeout(() => setManualInteraction(false), 5000); // Reset manual interaction after 5 seconds
    };


    const [over, setOver] = useState(true);
    return (
        <section
            className="Container   mt-0 sm:mb-[250px] sm:mt-[80px] relative z-0 "
            id="Features"
            ref={ref}
        >
            <div className="flex justify-center">
                <div className="relative cursor-pointer select-none ">
                    <p className="text-[28px] sm:text-[30px] 3xl:text-4xl text-center">
                        <strong>WHY</strong>{" "}
                        <span className="text-[18px] sm:text-[30px]">
                            TO CHOOSE OUR APP
                        </span>
                    </p>
                    <span className="sp sp1"></span>
                    <span className="sp sp2"></span>
                    <span className="sp sp3"></span>
                    <span className="sp sp4"></span>
                    <div
                        className="md:relative scale-[0.8] sm:scale-100 overflow-hidden  absolute right-1/2 translate-x-1/2  group"
                        onMouseOver={() => setOver(true)}
                        onMouseLeave={() => setOver(false)}
                    >
                        <svg
                            viewBox="0 0 1440 320"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute  group-hover:scale-y-75 group-hover:scale-x-100 group-hover:translate-y-0 duration-1000 scale-[5] translate-y-24"
                        >
                            <defs>
                                <path
                                    id="sineWave"
                                    className="fill-gray-400"
                                    fillOpacity="1"
                                    d="M0,32L48,80C96,128,192,224,288,256C384,288,480,256,576,213.3C672,171,768,117,864,128C960,139,1056,213,1152,208C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                                />
                            </defs>
                            <use className={(over && "wave") || ""} href="#sineWave" />
                            <use
                                className={(over && "wave") || ""}
                                x="-100%"
                                href="#sineWave"
                            />
                        </svg>

                        <div
                            className="  w-full bg-contain text-clip "
                            style={{ backgroundImage: "url('/Images/Features/image.png ')" }}
                        >
                            <h1 className="mix-blend-lighten h-full text-[80px] bg-white  ">
                                FEATURES
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-[140px] lg:gap-20 my-[140px] md:mt-10 relative">
                <div
                    className="absolute inset-0 -bottom-[20%] z-[-1]  flex-col justify-around items-center opacity-25 hidden lg:flex">
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                    <div className="h-[1px] w-[60%] bg-gradient-to-r from-[#2220] via-[#2228] to-[#2220]"></div>
                </div>
                <div
                    className="col-span-1 lg:col-span-2  flex-col gap-[140px] lg:gap-[100px] order-1 justify-between flex ">
                    {items.slice(0, 2).map((item, idx) => {
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.5, translateX: 40 }} // Initial animation state
                                animate={isInView ? { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 500, damping: 30, delay: idx * 0.5 } } : { opacity: 0, scale: 0.5, translateX: 40 }}

                            >
                                <FeatureItem
                                    RTL
                                    {...item}
                                    changeActive={changeActive}
                                    active={active === item.title}
                                    seq={idx}

                                />
                            </motion.div>
                        );
                    })}
                </div>
                <div className="col-span-1 lg:col-span-3 order-3 lg:order-2 mt-16 md:mt-0 z-40">

                    <div
                        className={
                            `${items.find(q => q.title === active)?.image2cls} bg-cover shadow-lg  rounded-lg hidden  border-[4px] border-[#E6E6E6] md:flex flex-col items-center gap-4 justify-between p-4 mx-auto transition-all z-30
w-[241px] h-[500px] md:h-full md:w-full md:aspect-[7/5] bg-red-200`
                        }
                    >
                    </div>
                    <div
                        className={
                            `${items.find(q => q.title === active)?.Mobileimage2cls} bg-cover shadow-lg  rounded-lg md:hidden border-[4px] border-[#E6E6E6] flex flex-col items-center gap-4 justify-between p-4 mx-auto transition-all z-30 w-[251px] h-[500px] lg:w-full lg:aspect-[7/5] bg-red-200`
                        }
                    >
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex-col gap-[140px] lg:gap-[100px] order-2 lg:order-2  justify-between flex">
                    {items.slice(2, 4).map((item, idx) => {
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.5 }} // Initial animation state
                                animate={isInView ? { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 500, damping: 30, delay: idx * 1 } } : { opacity: 0, scale: 0.5 }}>
                                <FeatureItem
                                    {...item}
                                    changeActive={setActive}
                                    active={active === item.title}
                                    waveLeft
                                    seq={idx}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}


export default Features;
