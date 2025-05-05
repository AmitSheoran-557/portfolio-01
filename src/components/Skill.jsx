"use client";
import React from "react";
import CustomHeading from "./common/CustomHeading";
import { SKILL_DATA } from "@/utils/helper";



const Skills = () => {
    return (
        <div id="skills" className="skills-section py-20 px-6 bg-gradient-to-b from-[#e1e2db] to-slate-400 text-custom">

            <CustomHeading titleOne="My" titleTwo="Skills" customClass="text-center mb-8" />
            {/* Decorative Divider Line */}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mb-16"></div>
            <div className="max-w-6xl mx-auto">
                <div className="skills-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILL_DATA.map((skill, index) => (
                        <div key={index} className="skill-card relative lg:p-4 p-3 bg-gray-400 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-4 border-transparent hover:border-custom group" >
                            {/* Decorative Overlay Box for emphasis */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-zinc-400 opacity-30 group-hover:opacity-0 transition-opacity duration-300 rounded-3xl"></div>
                            <h3 className="text-2xl text-white font-semibold text-custom md:mb-2 mb-1.5 relative z-10">{skill.name}</h3>
                            <p className="text-lg text-stone-700 relative z-10">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Decorative Bottom Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-400 mt-16"></div>
        </div>
    );
};

export default Skills;
