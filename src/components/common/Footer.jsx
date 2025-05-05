"use client";
import { FOOTER_SOCIAL_DATA_LIST } from "@/utils/helper";
import { UpArrow } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black-bg-2 bg-zinc-400 -mt-1 bg-cover xl:pt-[127px] xl:pb-[120px] lg:pt-24 pt-12 pb-12">
            <div className="container px-3 mx-auto">
                <div className="flex flex-wrap md:justify-between justify-center">
                    <div className="md:w-4/12 px-3 w-full  mx-auto max-md:flex flex-col justify-center items-center">
                        <h4 className="font-semibold text-lg text-white tracking-wider max-md:text-center">© {new Date().getFullYear()} Amit | Frontend Developer</h4>
                        <p className="text-sm text-zinc-200 mt-1 max-md:text-center">
                            Built with 🩶 using Next.js, <br className="hidden md:block" /> Tailwind CSS, Vercel & GSAP.
                        </p>
                    </div>

                    <div className="md:max-w-4/12 max-lg:hidden px-3 w-full cursor-pointer relative z-10 flex justify-center items-center max-lg:text-center">
                        <button onClick={() => { if (typeof window !== "undefined") { window.scrollTo({ top: 0, behavior: "smooth" }); } }} className="gap-4 flex flex-col items-center">
                            <span className="animate-bounce cursor-pointer max-w-max"><UpArrow /></span>
                            <span className="lg:text-sm text-xs font-light animate-pulse max-w-max text-white tracking-[8%] cursor-pointer">BACK TO TOP</span>
                        </button>
                    </div>

                    <div className="md:w-4/12 px-3 w-full flex lg:justify-end justify-center items-center md:pt-0 sm:pt-8 pt-7">
                        <div className="flex gap-4">
                            {FOOTER_SOCIAL_DATA_LIST.map((item, i) => (
                                <Link href={item.path} key={i} target="_blank" className="xl:size-12 hover:scale-110 transition-all  ease-linear duration-200 hover:transform hover:-translate-y-1.5 bg-white/30 bg-opacity-[10%] p-[14px] flex justify-center items-center rounded-full">
                                    <Image
                                        className="xl:size-5"
                                        src={item.iconImg}
                                        alt={item.alt}
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
