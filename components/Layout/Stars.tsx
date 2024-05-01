"use client"
import Image from "next/image";
export const StarRating = ({ Rated, StarRating, imageSrc }: { Rated: number, StarRating: number, imageSrc: string }) => {
    return (
        <div className="flex items-center">
            <Image src={imageSrc} width={18} height={18} alt="star-icon" />
            <p className="ml-1 lg:mr-2 font-thin text-sm lg:text-base"> ({Rated}) </p>
            {[1, 2, 3, 4, 5].map((index) => (
                <span
                    key={index}
                    // onClick={() => handleStarClick(index)}
                    className={`text-2xl cursor-pointer ${index <= StarRating
                        ? "text-[#fbbc04] fill-current"
                        : "text-gray-300 fill-none"
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};