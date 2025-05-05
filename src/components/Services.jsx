"use client";
import React from 'react';
import { SERVICES_DATA_LIST } from '@/utils/helper';
import Marquee from 'react-fast-marquee';
import Lottie from 'lottie-web';

//----------------------------------------- Dynamically import Lottie with SSR disabled --------------------------------------


const Services = () => {
    return (
        <div id='services' className="services-section py-20 px-6 bg-gradient-to-b from-[#e1e2db] to-zinc-400">
            <h2 className="text-4xl font-semibold text-center mb-12 text-slate-400">
                My Services
            </h2>

            {/*--------------------------------------------- Decorative Divider Line ------------------------------------------*/}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mb-16"></div>
            <div className="max-w-6xl mx-auto max-lg:hidden lg:block">
                <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8 xl:gap-7 lg:gap-6 gap-5">
                    {SERVICES_DATA_LIST.map((service, index) => (
                        <div key={index} className="service-card 2xl:p-8 xl:p-7 lg:p-6 p-5 bg-white/50 border-4 border-zinc-300 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:border-custom group">
                            {/*------------------------------ Lottie Animation -------------------------------------------------*/}
                            <div className="icon mb-6 max-w-[140px] mx-auto transform  group-hover:scale-125 transition duration-500 ease-in-out">
                                <Lottie
                                    animationData={service.animation}
                                    loop={true}
                                    height={140}
                                    width={140}
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-custom mb-4 text-center">{service.title}</h3>
                            <p className="text-lg text-zinc-400 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-6xl mx-auto max-lg:block lg:hidden">
                <Marquee speed={40} pauseOnHover gradient={false}>
                    {SERVICES_DATA_LIST.map((service, index) => (
                        <div
                            key={index}
                            className="service-card max-w-sm 2xl:p-8 xl:p-7 lg:p-6 p-5 bg-white/50 border-4 border-zinc-300 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:border-custom group mx-4 min-w-[300px]"
                        >
                            <div className="icon mb-6 transform group-hover:scale-125 transition duration-500 ease-in-out">
                                <Lottie
                                    options={{
                                        animationData: service.animation,
                                        loop: true,
                                        autoplay: true,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice",
                                        },
                                    }}
                                    height={140}
                                    width={140}
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-custom mb-4 text-center">{service.title}</h3>
                            <p className="text-lg text-zinc-400 text-center">{service.description}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/*--------------------------------------------- Decorative Bottom Divider ------------------------------------------*/}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mt-16"></div>
        </div>
    );
};

export default Services;
