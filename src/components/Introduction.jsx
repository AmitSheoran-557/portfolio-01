"use client";
import React, { useEffect } from "react";
import CustomHeading from "./common/CustomHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Introduction = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".trigger-section",
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "restart none none none",
                    scrub: 3,
                    duration: 2,
                    markers: true,
                }
            });

            tl.from(".custom-heading", {
                opacity: 0,
                x: -50,
                duration: 1.2,
                ease: "power3.out",
            })
                .from(".intro-heading", {
                    opacity: 0,
                    y: -50,
                    duration: 1.2,
                    ease: "power3.out",
                }, "-=0.8")
                .from(".intro-subheading", {
                    opacity: 0,
                    y: 50,
                    duration: 1.2,
                    ease: "power3.out",
                }, "-=1")
                .from(".intro-buttons", {
                    opacity: 0,
                    scale: 0.9,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                }, "-=0.9")
                .from(".decorative-lines", {
                    y: -50,
                    width: 0,
                    height: 0,
                    duration: 1.5,
                    stagger: 0.,
                    ease: "power3.out",

                }, "-=1");
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="trigger-section">
            <div className="w-full h-1 bg-zinc-400 pb-4"></div>
            <div className="relative 2xl:py-60 xl:py-40 lg:py-36 md:py-16 py-12 bg-gradient-to-b to-zinc-400 from-[#e1e2db] overflow-hidden flex flex-col w-full items-center justify-center px-5">
                {/* Decorative Lines */}
                <div className="absolute top-0 left-20 w-2 h-full lg:block max-lg:hidden bg-zinc-500 decorative-lines"></div>
                <div className="absolute top-0 right-20 w-2 h-full lg:block max-lg:hidden bg-zinc-500 decorative-lines"></div>
                <div className="absolute lg:top-10 top-5 lg:right-10 right-5 lg:w-1/4 w-2/4 lg:h-2 h-1.5 bg-zinc-500 decorative-lines"></div>
                <div className="absolute lg:bottom-10 bottom-5 lg:left-10 left-5 lg:w-1/4 w-2/4 lg:h-2 h-1.5 bg-zinc-500 decorative-lines"></div>

                {/* Main Content */}
                <div className="max-w-3xl text-center z-20">
                    <CustomHeading
                        titleOne="Introduction"
                        customClass="uppercase lg:absolute left-28 xl:top-16 top-16 custom-heading"
                    />
                    <CustomHeading
                        titleOne="Hey, I'm"
                        titleTwo="Amit"
                        customClass="intro-heading max-md:text-3xl"
                    />

                    <p className="sm:text-lg md:text-xl text-zinc-500 font-medium leading-relaxed intro-subheading">
                        A passionate{" "}
                        <span className="text-slate-500 font-semibold">Frontend Developer</span> crafting sleek,
                        responsive web experiences using React, Next.js, Tailwind CSS, and Bootstrap.
                        I love transforming ideas into interactive designs.
                    </p>
                    <div className="mt-8 flex justify-center gap-4 intro-buttons">
                        <Link href='/hire-me' className="bg-slate-500 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-[#e1e2db] hover:text-slate-500 border border-transparent hover:border-slate-500 transition-all ease-linear duration-300">
                            Hire Me
                        </Link>
                        <Link href="/projects" className="hover:bg-slate-500 cursor-pointer border border-slate-500 text-slate-500 px-5 py-2 rounded-lg hover:text-white bg-[#e1e2db] transition-all ease-linear duration-300">
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
