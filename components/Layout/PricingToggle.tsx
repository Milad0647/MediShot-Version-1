"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
function PricingToggle({ toggle }: { toggle: (e: boolean) => void }) {
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => {
        setIsOn(!isOn)
        toggle(isOn)
    };
    return (
        <button className={`w-[288px] h-[54px] bg-white dark:bg-dark-100 border border-[#E7E7E7] flex rounded-lg select-none relative ${isOn ? " justify-end" : "justify-start"}`} onClick={toggleSwitch}>
            <motion.div
                animate={isOn ? { backgroundColor: "#3634A3" } : { backgroundColor: "#3634A3" }}
                className="w-1/2 h-full bg-success-400 rounded-lg flex items-center justify-center z-[1]" layout transition={spring} >
                <p className='text-white font-semibold  select-none'>{isOn ? "Yearly" : "Monthly"}</p>
            </motion.div>

            <div className='w-full flex text-black font-thin items-center justify-between pl-10 pr-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p>Monthly</p>
                <p>Yearly</p>
            </div>
        </button>
    )
}

export default PricingToggle