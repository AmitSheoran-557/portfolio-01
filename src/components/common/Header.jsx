"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { HEADER_DATA_LIST, } from '@/utils/helper';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);


    return (
        <div className='bg-transparent fixed z-50 top-0 backdrop-blur-lg w-full'>
            <div className="bg-transparent max-w-[1272px] mx-auto lg:p-4 p-2 w-full ">
                <div className="bg-black/35 w-full flex justify-between lg:py-6 md:py-5 py-4 items-center lg:px-9 md:px-7 sm:px-5 px-4 rounded-[60px] border-white/15 border">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center lg:gap-10 md:gap-7 gap-4">
                            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col items- z-[100] gap-1.5 lg:hidden relative w-[18px] h-[14px] mr-6" >
                                <span className={`md:h-1 min-h-[4px] max-md:max-h-[4px] w-full bg-white rounded min-w-9 transition-all duration-300 ${isOpen ? "rotate-45 -translate-y-[1.9px] !bg-black !max-w-10 !min-w-[36px]" : ""}`}></span>
                                <span className={`md:h-1 min-h-[4px] max-md:max-h-[4px] w-full bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[11px] !bg-black !max-w-10 !min-w-[36px]" : ""}`}></span>
                            </button>
                            <Link href="/"><h2 className="font-bold font-integral lg:text-[32px] md:text-3xl text-[25px] !leading-[100%] text-white">AMIT</h2></Link>
                        </div>
                        <div className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:z-[90] transition-transform duration-300 ${isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"}`}>
                            <div className="flex items-center lg:gap-9 gap-7 max-h-8 max-lg:flex-col lg:overflow-hidden max-lg:justify-center">
                                {HEADER_DATA_LIST.map((item, i) => (
                                    <div key={i} className="relative lg:h-[32px] h-full w-max lg:overflow-hidden group">
                                        {/* Normal Link */}
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block transition-all duration-500 ease-in-out transform-3d group-hover:-translate-y-full"
                                        >
                                            <span className="font-medium lg:text-lg flex items-center lg:text-white">
                                                {item.title} {item.icon}
                                            </span>
                                        </Link>

                                        {/* Hover Link */}
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block absolute top-full max-lg:hidden left-0 transition-all duration-500 ease-in-out transform group-hover:translate-y-[-110%]"
                                        >
                                            <span className="font-medium lg:text-lg flex items-center lg:text-white">
                                                {item.title} {item.icon}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header