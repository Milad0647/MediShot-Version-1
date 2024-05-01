import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="border-t-2 border-[#5DE6FF] bg-white  text-[#29292C]  mt-[75px]">
            <div className="">
                <div className="Container  my-10 grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Side */}
                    <div className="">
                        <div className="mb-6 lg:mb-10">
                            {/* Logo */}
                            <div className='flex items-center gap-4'>
                                <div className='w-[60px] h-[60px] relative'>
                                    <Image src={"/Logo/Logo.svg"} fill className='object-contain' alt='Logo' />
                                </div>
                                <div className='w-[190px] h-[35px] relative'>
                                    <Image src={"/Logo/Text.svg"} fill className='object-contain' alt='text' />
                                </div>
                            </div>
                            <p className='font-light mt-4' >
                                <span className="text-xl ">
                                    Picture Perfect Care, Simplified
                                </span>
                                <br />
                                Our mission is to design solutions that are intuitive and easy
                                to <br /> use, allowing doctors to focus on nothing but
                                patient care.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4 pb-7 lg:pb-0">
                            <Link href={"#"}>
                                <Image src={"/icons/Facebook.svg"} width={32} height={32} alt='Facebook' />
                            </Link>
                            <Link href={"#"}>
                                <Image src={"/icons/Instagram.svg"} width={32} height={32} alt='Facebook' />
                            </Link>
                            <Link href={"#"}>
                                <Image src={"/icons/Linkedin.svg"} width={32} height={32} alt='Facebook' />
                            </Link>
                            <Link href={"#"}>
                                <Image src={"/icons/Pintrest.svg"} width={32} height={32} alt='Facebook' />
                            </Link>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="">
                        {/* Title with Links */}
                        <>
                            <h3 className="text-3xl text-CMGRAY font-medium pb-5 ">
                                Menu
                            </h3>
                            <ul className="flex flex-col gap-4 text-xl font-light  pb-7 lg:pb-0 ">
                                <li>
                                    <Link href="#download">Download</Link>
                                </li>
                                <li>
                                    <Link href="#features">Features</Link>
                                </li>
                                <li>
                                    <Link href="#started">How to Get Started</Link>
                                </li>
                            </ul>
                        </>

                        {/* Images with Links */}
                    </div>

                    <div className="flex">
                        {/* Title with Links */}
                        <div className="mb-4 w-full ">
                            <h3 className="text-3xl text-CMGRAY font-medium pb-5 ">
                                Download
                            </h3>
                            <div className=' flex flex-col gap-2'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <Image src={"/icons/AppleIcon.svg"} width={18} height={18} alt='apple' />
                                        <p className='font-light'>App Store</p>
                                    </div>
                                    <div className='w-[200px] h-[60px] relative'>
                                        <Image src={"/icons/AppleDownload.svg"} className='object-contain' fill alt='appleDownload' />
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <Image src={"/icons/GooglePlay.svg"} width={18} height={18} alt='apple' />
                                        <p className='font-light'>Google Play</p>
                                    </div>
                                    <div className='w-[200px] h-[60px] relative'>
                                        <Image src={"/icons/GoogleDownload.svg"} className='object-fill' fill alt='appleDownload' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#3634a3] ">
                <div className="Container text-white flex flex-col lg:flex-row  items-center justify-between  mx-auto py-3">
                    <p className="text-xl font-light py-6 lg:py-0  lg:order-1 order-2">All rights reserved.2024</p>
                    <Link href="#" className="font-light text-xl border-b-[0.5px] lg:border-none w-full lg:w-fit text-center lg:text-start py-6 lg:py-0 order-1 lg:order-2">Terms & Privacy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer