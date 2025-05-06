"use client";
import React, { useEffect, useRef } from 'react';
import { SERVICES_DATA_LIST } from '@/utils/helper';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

// ✅ Lottie Wrapper using lottie-web + Intersection Observer
const LottieWrapper = ({ animationData }) => {
    const containerRef = useRef(null);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && containerRef.current) {
            const anim = lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData,
            });
            return () => anim.destroy();
        }
    }, [inView, animationData]);

    useEffect(() => {
        AOS.init({
            once: false,
            easing: 'ease-linear',
        });
    }, []);

    return (
        <div ref={ref}>
            <div ref={containerRef} className="lg:w-[140px] lg:h-[140px] w-[100px] h-[100px]" />
        </div>
    );

};

const Services = () => {

    return (
        <div id='services' className="services py-20 lg:px-6 px-4 bg-gradient-to-b overflow-hidden relative from-[#e1e2db] to-zinc-400">
            <h2 className="text-4xl font-semibold text-center mb-12 text-slate-400">
                My Services
            </h2>

            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mb-16"></div>

            {/* 🖥️ Desktop View */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8 xl:gap-7 lg:gap-6 gap-4">
                    {SERVICES_DATA_LIST.map((service, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-duration="1000" className="cardImages">
                            <div className="2xl:p-8 xl:p-7 lg:p-5 p-4 h-full bg-white/50 border-4 border-zinc-300 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:border-custom group">
                                <div className="icon xl:mb-6 lg:mb-5 mb-4 mx-auto transform group-hover:scale-125 flex justify-center transition duration-500 ease-in-out">
                                    <LottieWrapper animationData={service.animation} />
                                </div>
                                <h3 className="xl:text-2xl lg:text-xl text-lg font-semibold text-custom xl:mb-4 lg:mb-3 mb-2 text-center">{service.title}</h3>
                                <p className="lg:text-lg text-sm text-zinc-400 text-center">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mt-16"></div>
        </div>
    );
};

export default Services;
