"use client";
import { useEffect, useState } from "react";
import { PROJECTS_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import CustomHeading from "./common/CustomHeading";
import { RightArrow } from "@/utils/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Projects = () => {
    const [search, setSearch] = useState("")
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA_LIST);


    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filtered = PROJECTS_DATA_LIST.filter((project) =>
            project.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredProjects(filtered);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".projects",
                    start: "top 90%",
                    end: "top 10%",
                    toggleActions: "restart none none none",
                    scrub: 3,
                    duration: 2,
                },
            });

            tl.from(".decorative-line", {
                y: -50,
                width: -1,
                duration: 2.6,
                stagger: 0.4,
                ease: "power2.out",
            })
                .from(".project-heading", {
                    y: -40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.4")
                .from(".project-cards", {
                    x: -400,
                    opacity: 0,
                    duration: 4,
                    ease: "power4.out",
                    touchAction: "reverse",
                    stagger: {
                        amount: 2,
                        start: 0.9,
                        from: "start"
                    },
                    scrub: 4,
                }, "-=0.4");

        });
        return () => ctx.revert();
    },);

    return (
        <div
            id="projects"
            className="bg-[#e1e2db] projects text-zinc-700 py-20 relative overflow-hidden"
        >
            {/* Decorative Lines */}
            <div className="decorative-line absolute top-10 left-0 w-full h-2 bg-gradient-to-l from-zinc-400 via-slate-400 to-transparent"></div>
            <div className="decorative-line sm:max-w-28 max-w-16 absolute w-full sm:h-20 h-16 left-0 rotate-90 sm:top-20 md:top-28 top-16 bg-zinc-400">
                <span className="absolute max-w-8 w-full sm:h-28 h-12 -z-10 right-4 bottom-0 bg-slate-500"></span>
            </div>
            <div className="decorative-line absolute top-0 right-0 max-w-xs w-full h-32 max-lg:hidden lg:block bg-zinc-400">
                <span className="absolute max-w-sm w-full min-h-6 left-0 bottom-[17px] animate-bounce bg-[#e1e2db]"></span>
            </div>

            <div className="max-w-[1172px] px-4 mx-auto">
                <div className="project-heading text-center xl:mb-16 lg:mb-12 md:mb-10 mb-7">
                    <CustomHeading titleOne="My" titleTwo="Projects" />
                </div>

                <div className="mx-auto flex justify-start xl:ps-0 lg:ps-4 mb-8 relative">
                    <input className="bg-white border border-zinc-300 z-10 text-gray-400 rounded-full py-2 px-4 max-w-sm w-full outline-none" placeholder="Search Projects..." type="search" value={search} onChange={handleSearch} />
                    <div className="absolute left-10 me-3 top-4 bg-slate-500 h-3 w-full lg:hidden max-lg:block"></div>
                </div>
                <div className="flex flex-wrap 2xl:gap-6 xl:gap-5 gap-4 justify-center">
                    {filteredProjects.map((project, index) => (
                        <div className="project-cards" key={index}>
                            <div className=" bg-white/60 border xl:max-w-[360px] lg:max-w-[310px] sm:max-w-[330px] max-w-sm lg:h-[421px] sm:h-[420px] border-zinc-300 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-md transition-all ease-linear duration-300 group relative">
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="xl:text-xl text-lg font-semibold text-zinc-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-slate-400/40 px-2 py-1 rounded text-zinc-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="text-sm font-medium sm:absolute bottom-4 left-4 lg:left-5 text-blue-700 hover:underline flex gap-2 items-center justify-center max-w-max"
                                    >
                                        View Project
                                        <span className="mt-0.5"><RightArrow /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
