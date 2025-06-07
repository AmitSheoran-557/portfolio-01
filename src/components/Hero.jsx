"use client"
import Image from 'next/image'
import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(max-width: 768px)", () => {
                gsap.from(".profile-img", { x: -400, scale: 0.8, opacity: 0, });
                gsap.from(".profile-name", { y: 30, opacity: 0, delay: 0.5 });
            });

            mm.add("(min-width: 769px)", () => {
                gsap.from(".profile-img", { x: -400, scale: 0.8, opacity: 0, duration: 2 });
                gsap.from(".profile-name", { y: 50, opacity: 0, delay: 0.5 });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id='hero' className='w-full flex justify-center items-center overflow-hidden relative'>
            <Image className='absolute bottom-0 right-0 lg:top-3 max-w-[124px] md:bottom-12' src="/assets/images/webp/dots-img.webp" alt="dots-img" height={62} width={124} />
            <Image className='absolute pointer-events-none xl:left-32 lg:left-0 sm:left-24 left-5 floatStarTwo max-md:top-20 xl:max-w-40 lg:max-w-32 md:max-w-24 max-w-20 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-1.webp' width={213} height={230} alt='ellipse-img-1' />
            <Image className='absolute pointer-events-none lg:right-28 md:right-20 right-12 top-4 revolve xl:max-w-24 lg:max-w-20 max-w-16 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-2.webp' width={213} height={230} alt='ellipse-img-1' />
            <Image className='absolute pointer-events-none lg:right-[36%] md:right-14 right-7 bottom-6 bounceCustom xl:max-w-24 lg:max-w-20 max-w-16 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-3.webp' width={213} height={230} alt='ellipse-img-1' />
            <div className="w-full bg-gradient-to-b from-[#e1e2db] to-slate-400 flex flex-col items-center justify-center xl:py-36 lg:py-28 max-lg:pb-32 max-md:pb-20 max-sm:pb-16 max-lg:pt-12">
                <div className="w-full xl:max-w-5xl lg:max-w-3xl md:max-w-3xl p-6 relative flex flex-col md:flex-row items-center md:items-center max-md:!justify-center max-lg:justify-between space-y-4 md:space-y-0 md:space-x-6">
                    <motion.div
                        initial={{ width: 0, }}
                        animate={{ width: 128, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                        className="absolute lg:top-20 md:top-10 top-0 lg:-left-6 left-0 lg:max-w-32 sm:max-w-14 max-w-7 w-full md:h-5 h-80 bg-zinc-400 mb-4"
                    ></motion.div>
                    <div className="profile-img w-full xl:max-w-xs xl:max-h-[320px] max-w-[296px] max-h-[296px] lg:rounded-full rounded-[60px_0px_60px_0px] overflow-hidden flex-shrink-0">
                        <motion.div
                            initial={{ width: 0, }}
                            animate={{ width: 128, opacity: 1 }}
                            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                            className="absolute top-16 -left-6 max-w-32 w-full h-3 bg-zinc-400 mb-4"
                        ></motion.div>
                        <motion.div
                            initial={{ width: 0, }}
                            animate={{ width: 128, opacity: 1 }}
                            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                            className="absolute bottom-10 -right-6 max-w-32 w-full h-3 bg-zinc-400 mb-4"
                        ></motion.div>
                        <Image src="/assets/images/png/profile-img.png" alt="Profile" width={296} height={296} className="object-cover pointer-events-none w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center md:pt-28 pt-4 w-full max-w-sm">
                        <h2 className="text-gray-600 text-sm mb-2 absolute lg:-top-10 -top-4 right-4">
                            <Typewriter words={["Hi, I'm a Frontend Developer", "I build clean UIs", "Love animations 💖"]}
                                loop={true}
                                cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                        </h2>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl profile-name text-stone-700 mb-4 max-md:-translate-x-10 max-sm:-translate-x-1 lg:transform-3d lg:-translate-x-20 md:-translate-x-12 mx-auto">Elevating <br />
                            <span className='flex items-center lg:gap-4 gap-2 max-md:ps-12'>
                                Experiences
                                <span className="border-t-4 border-r-4 border-stone-700 lg:w-4 lg:h-4 w-3 h-3 rotate-45 lg:ml-2 xl:mt-5  sm:mt-4 mt-3"></span>
                            </span>
                        </h1>
                        <p className="text-gray-600 max-sm:text-zinc-100 xl:-translate-x-[74px] h-20 lg:-translate-x-[60px] max-sm:text-center max-sm:px-4 md:-translate-x-4 text-base mb-4">
                            <Typewriter words={["Crafting elegant, fast, and animated frontend experiences with React, Next.js, Tailwind CSS, and GSAP."]}
                                cursor typeSpeed={40} delaySpeed={1000} />
                        </p>
                    </div>
                </div>
                <div className="absolute w-full bottom-0 flex items-center justify-center">
                    {/*-------------------------------------------------- Left Block ---------------------------------------------*/}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="max-w-xs absolute w-full h-10 left-0 md:bottom-20 bottom-8 bg-zinc-400">
                        <motion.span
                            initial={{ x: 40, opacity: 0, left: 0 }}
                            animate={{ x: 0, opacity: 1, left: 290 }}
                            transition={{ duration: 2.5, delay: 1.5 }}
                            className="absolute max-w-4 w-full h-10 animate-pulse bottom-0 bg-black/40"
                        />
                    </motion.div>

                    {/*-------------------------------------------------- Right Block ---------------------------------------------*/}
                    <motion.div initial={{ y: 80, scale: 0.8 }} animate={{ y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="absolute bottom-0 right-0 max-w-xs w-full h-32 max-md:hidden bg-zinc-400">
                        <motion.span
                            animate={{ y: [0, -13, 0] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 2.2,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="absolute max-w-sm w-full min-h-6 left-0 bottom-[77px] bg-[#ffffff]"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
