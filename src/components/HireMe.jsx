"use client"
import React from "react";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="relative h-full py-40 px-4 md:px-8 bg-gradient-to-br from-[#e1e2db] to-slate-200">
            {/* Decorative Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zinc-300 to-slate-400 opacity-20" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">💼 Let's Work Together</h2>
                <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mb-10">
                    I'm open to exciting frontend opportunities — freelance, part-time, or full-time. Let's create something amazing together with modern, scalable, and user-friendly design!
                </p>

                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <Link
                        href="/contact"
                        className="bg-slate-700 hover:bg-transparent hover:text-slate-700 ease-linear duration-300 text-white py-3 px-6 rounded-md transition-all border border-transparent hover:border-slate-600 shadow-lg hover:shadow-xl"
                    >
                        Direct Message
                    </Link>
                    <a
                        href="mailto:amit22082006@gmail.com"
                        className="text-slate-600  hover:text-slate-900 transition-all ease-linear duration-200 hover:underline text-sm md:text-base"
                    >
                        📩 Or send me an email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
