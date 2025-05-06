"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomHeading from "./common/CustomHeading";
import { ABOUT_ME_CARDS_DATA } from "@/utils/helper";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const [hasTyped, setHasTyped] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    if (inView && !hasTyped) {
        setHasTyped(true);
    }
    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia()
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(".decorative-line-about", {
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 80%",
                    end: "top 0%",
                    scrub: 3,
                    duration: 2,
                },

                stagger: {
                    amount: 2,
                    start: 0.9,
                    from: "start"
                },
                height: 0,
                duration: 3,
                stagger: 0.2,
                ease: "power2.out",
                touchAction: "reverse",
            });
            mm.add("(max-width: 768px)", () => {
                gsap.from(".about-card", {
                    x: 400,
                    opacity: 0,
                    duration: 4,
                    ease: "power4.out",
                    stagger: {
                        amount: 10,
                        start: 0.3,
                        from: "start",
                    },
                    scrollTrigger: {
                        trigger: '.about',
                        start: "top 45%",
                        end: "top 0%",
                        scrub: 4,
                        duration: 6,
                    }
                });

                gsap.from(".resume-btn", {
                    y: 800,
                    duration: 4,
                    ease: "power4.out",
                    stagger: {
                        amount: 4,
                        start: 0.9,
                        from: "start"
                    },
                    scrollTrigger: {
                        trigger: '.about',
                        start: "45% top",
                        end: "top 60%",
                        scrub: 3,
                        duration: 3,
                    }
                });
            });
            mm.add("(min-width: 769px)", () => {
                gsap.from(".about-card", {
                    x: 400,
                    opacity: 0,
                    duration: 2,
                    ease: "power4.out",
                    stagger: {
                        amount: 2,
                        start: 0.9,
                        from: "start"
                    },
                    scrollTrigger: {
                        trigger: '.about',
                        start: "top 65%",
                        end: "top 20%",
                        scrub: 3,
                        duration: 2,
                    }

                });
                gsap.from(".heading", {
                    opacity: 0,
                    y: -50,
                    duration: 2.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.about',
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 3,
                    }
                },)
                gsap.from(".about-subheading", {
                    opacity: 0,
                    y: 50,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.about',
                        start: "top 75%",
                        end: "top 20%",
                        scrub: 3,
                    }
                }, "-=1")
                gsap.from(".resume-btn", {
                    y: 400,
                    opacity: 0,
                    duration: 2,
                    ease: "power4.out",
                    stagger: {
                        amount: 2,
                        start: 0.9,
                        from: "start"
                    },
                    scrollTrigger: {
                        trigger: '.about',
                        start: "top 40%",
                        end: "top 0%",
                        scrub: 3,
                    }
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} id="about" className="relative about bg-gradient-to-b from-[#e1e2db] to-zinc-400 overflow-hidden lg:py-20 md:py-16 py-12 flex justify-center">
            <div className="decorative-line-about absolute top-0 lg:left-1/4 md:left-28 left-20 h-full w-2 bg-gradient-to-b from-[#e1e2db] to-slate-400 opacity-70" />
            <div className="decorative-line-about absolute lg:top-10 top-6 lg:right-10 sm:right-5 right-0 lg:w-1/4 w-2/4 h-2 lg:bg-gradient-to-l bg-gradient-to-r from-[#e1e2db] to-zinc-400 opacity-70" />
            <div className="relative z-10 max-w-[1172px] px-4 text-center">
                <CustomHeading titleOne="About" titleTwo="Me" customClass={"heading"} />
                <p className="md:text-lg lg:text-xl about-subheading text-zinc-500 font-medium leading-relaxed px-4">
                    {hasTyped ? (
                        <>
                            <Typewriter
                                words={["I'm Amit, a frontend developer from Singhani, deeply passionate about UI/UX design and frontend performance. I specialize in crafting elegant and performant user interfaces using "]}
                                loop={1}
                                typeSpeed={10}
                                delaySpeed={500}
                            />
                            <span className="text-rose-400 font-semibold">React</span>,{" "}
                            <span className="text-emerald-400 font-semibold">Next.js</span>,{" "}
                            <span className="text-slate-500 font-semibold">Tailwind CSS</span> and{" "}
                            <span className="text-zinc-600 font-semibold">Bootstrap</span>.
                        </>
                    ) : null}
                </p>

                <div className="mt-12 flex flex-wrap 2xl:gap-6 xl:gap-5 gap-4 text-left relative justify-center">
                    {ABOUT_ME_CARDS_DATA.map((card, index) => (
                        <div className="about-card" key={index}>
                            <div className="group relative transition-all ease-linear duration-300 xl:max-w-[260px] lg:max-w-[230px] sm:max-w-[290px] max-w-sm w-full">
                                <div className="bg-white/50 border relative z-10  border-zinc-300 rounded-xl xl:p-6 p-4 sm:h-48 h-36 backdrop-blur-xs shadow-sm">
                                    <h3 className="text-zinc-800 whitespace-nowrap font-semibold xl:text-lg mb-2">{card.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
                                </div>
                                <div className="w-10 h-10 bg-zinc-500 absolute rounded-full left-0 group-hover:-left-3 group-hover:-top-3 transition-all ease-linear duration-300 opacity-0 group-hover:!opacity-100 top-0"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 resume-btn">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-transparent border border-transparent hover:border-slate-600 hover:text-slate-600 transform transition-all ease-linear duration-300 inline-block"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
