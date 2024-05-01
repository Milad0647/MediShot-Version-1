import React from 'react'
import { Link as ReactScroll } from "react-scroll"
function HeaderLinks({ toggle }: { toggle?: () => void }) {

    return (
        <ul className='flex flex-col gap-6 lg:gap-0 lg:flex-row  items-center  text-xl  font-light text-[#858585]'>
            <li className='hidden lg:block'>
                <ReactScroll
                    className={`relative linenav cursor-pointer  duration-200`}
                    activeClass="Linkactive"
                    onClick={toggle}
                    to={"Download"}
                    spy={true}
                    smooth={true}
                    offset={-550}
                    duration={500}
                >
                    {"Download"}
                </ReactScroll>
                <span className="hidden lg:inline-block px-6 2xl:px-10">|</span>
            </li>
            <li className='lg:hidden'>
                <ReactScroll
                    className={`relative linenav cursor-pointer  duration-200`}
                    activeClass="Linkactive"
                    onClick={toggle}
                    to={"Download"}
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={500}
                >
                    {"Download"}
                </ReactScroll>
                <span className="hidden lg:inline-block px-6 2xl:px-10">|</span>
            </li>
            <li >
                <ReactScroll
                    className={`relative linenav cursor-pointer  duration-200`}
                    activeClass="Linkactive"
                    onClick={toggle}
                    to={"Features"}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    {"Features"}
                </ReactScroll>
                <span className="hidden lg:inline-block px-6 2xl:px-10">|</span>
            </li>
            <li >
                <ReactScroll
                    className={`relative linenav cursor-pointer  duration-200`}
                    activeClass="Linkactive"
                    onClick={toggle}
                    to={"How to Get Started"}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    {"How to Get Started"}
                </ReactScroll>
                <span className="hidden lg:inline-block px-6 2xl:px-10">|</span>
            </li>
            <li >
                <ReactScroll
                    className={`relative linenav cursor-pointer  duration-200`}
                    activeClass="Linkactive"
                    onClick={toggle}
                    to={"Pricing"}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    {"Pricing"}
                </ReactScroll>
            </li>
        </ul>
    )
}

export default HeaderLinks