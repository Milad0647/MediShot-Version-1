import Link from 'next/link'
import React from 'react'
import { StarRating } from './Stars'
import Image from 'next/image'

function RatedApp() {
    return (
        <div className="flex items-center lg:justify-start gap-y-4 w-full justify-center gap-4 " >
            <div className="flex flex-col grow max-w-[200px]">
                <StarRating StarRating={5} Rated={4.9} imageSrc={"/icons/AppleIcon.svg"} />
                <Link href="#" className="relative w-full aspect-[3/1]">
                    <Image src={"/icons/AppleDownload.svg"} alt='apple-download' fill className="object-contain" />
                </Link>
            </div>
            <div className="flex flex-col grow max-w-[200px]">
                <StarRating StarRating={4} Rated={4} imageSrc={"/icons/GooglePlay.svg"} />
                <Link href="#" className="relative w-full aspect-[3/1]">
                    <Image src={"/icons/GoogleDownload.svg"} alt='apple-download' fill className="object-contain" />
                </Link>
            </div>
        </div>
    )
}

export default RatedApp