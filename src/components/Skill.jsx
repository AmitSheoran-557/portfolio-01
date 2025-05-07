"use client";
import React, { useEffect, useState } from "react";
import CustomHeading from "./common/CustomHeading";
import { INTEGRATIONS_DATA, INTEGRATIONS_DATA_POSITION, SKILL_DATA } from "@/utils/helper";
import Image from "next/image";
import Chart from 'react-apexcharts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const Skills = () => {
    const [startAnim, setStartAnim] = useState(false);
    const skillLevels = {
        Expert: 95,
        Advanced: 80,
        Intermediate: 60,
    };
    const series = SKILL_DATA.map(skill => skillLevels[skill.level]);
    const labels = SKILL_DATA.map(skill => skill.name);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const trigger = ScrollTrigger.create({
            trigger: ".skills-chart",
            start: "top 70%",
            onEnter: () => setStartAnim(true),
        });
        return () => trigger.kill();
    }, []);
    const chartOptions = {
        chart: {
            type: 'radialBar',
            height: 450,
            offsetY: 15,

        },
        colors: ['#64748b', '#a1a1aa', '#94a3b8', '#facc15', '#22d3ee', '#8b5cf6', '#f97316', '#14b8a6', '#f43f5e'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: '#334155',
                    },
                    value: {
                        fontSize: '14px',
                        color: '#0f172a',
                    },

                }
            }
        },
        labels,
        legend: {
            show: true,
            position: 'bottom',
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        }
    };
    return (
        <div id="skills" className="skills-chart lg:py-20 md:py-16 py-12 px-6 overflow-hidden relative text-custom">

            <CustomHeading titleOne="My" titleTwo="Skills" customClass="text-center xl:mb-8 lg:mb-6 mb-4" />
            {/* Decorative Divider Line */}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 2xl:mb-16 xl:mb-14 lg:mb-12 md:mb-10 sm:mb-8 mb-4"></div>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-wrap lg:pb-0 lg:gap-0 md:gap-16 gap-16">
                    <div className="lg:w-5/12 w-full items-center justify-center">
                        {startAnim && (
                            <Chart
                                options={chartOptions}
                                series={series}
                                type="radialBar"
                                height={450}
                            />
                        )}
                    </div>
                    <div className="lg:w-7/12 w-full lg:right-[38px] lg:top-10 relative xl:-right-12 max-xl:!mx-auto">
                        {/* api logo images map */}
                        <div className="relative xl:translate-x-0 lg:translate-x-12 max-lg:flex justify-center items-center flex-wrap md:gap-4 gap-3">
                            {INTEGRATIONS_DATA.map((image, index) => (
                                <Image
                                    key={image.alt}
                                    src={image.src}
                                    alt={image.alt}
                                    width={190}
                                    height={84}
                                    className={`object-contain pointer-events-none p-1 xl:!max-w-[190px] sm:!max-w-[160px] !max-w-24 xl:h-[90px] h-14 w-full lg:absolute rounded-[17px] shadow-[0px_15px_34px_-6px_#0000001A] ${image.animation} ${INTEGRATIONS_DATA_POSITION[index]}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative Bottom Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mt-16"></div>
        </div>
    );
};

export default Skills;
