// Lottie JSON animation imports or URLs (replace with actual URLs or local file paths)
import webDevAnimation from '../../public/assets/lottie/web-development-lottie.json';
import uiUxAnimation from '../../public/assets/lottie/ui-ux-lottie.json';
import frontendDevAnimation from '../../public/assets/lottie/front-end-lottie.json';
import seoAnimation from '../../public/assets/lottie/seo-lottie-1.json';
import gsapAnimation from '../../public/assets/lottie/gsap-lottie.json';
import customAnimAnimation from '../../public/assets/lottie/seo-lottie.json';


export const HEADER_DATA_LIST = [
    {
        title: "About Me",
        path: "/about-me",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Services",
        path: "/services",
    },
];

export const FOOTER_SOCIAL_DATA_LIST = [

    {
        iconImg: "/assets/images/svg/discord-logo.svg",
        alt: "discord-logo",
        path: "https://www.linkedin.com/in/abdullah-ali-2b8b7223b/",
    },
    {
        iconImg: "/assets/images/svg/instagram-logo.svg",
        alt: "instagram-logo",
        path: "https://www.instagram.com/nxtend.code?igsh=dXFsNWV4YWZvd3Fz&utm_source=qr",
    },
    {
        iconImg: "/assets/images/svg/telegram-logo.svg",
        alt: "telegram-logo",
        path: "https://t.me/",
    },
    {
        iconImg: "/assets/images/svg/github-logo.svg",
        alt: "github-logo",
        path: "https://github.com/AmitSheoran-557",
    }
];

export const ABOUT_ME_CARDS_DATA = [
    {
        title: "👨‍💻 Experience",
        description:
            "1+ year of coding experience, working on frontend projects with performance and aesthetics in mind.",
    },
    {
        title: "📚 Tech Stack",
        description:
            "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Firebase, Vercel, GSAP.",
    },
    {
        title: "🌱 Currently Learning",
        description:
            "Exploring deeper integrations with Firebase, animations with Framer Motion, and UI frameworks like ShadCN/UI.",
    },
    {
        title: "⚡ Soft Skills",
        description: "Strong communication, time management, and a deep passion for learning and improving daily.",
    },
];

export const PROJECTS_DATA_LIST = [
    {
        title: "Zelt",
        description: "Zelt built with HTML, Canvas, Tailwind CSS, locomotive and hosted on Vercel.",
        image: "/assets/images/webp/project-thumbnail-img-1.webp",
        link: "https://zelt-one.vercel.app/",
        tags: ["HTML", "Tailwind", "Vercel"],
        code: "",
        showInProjects: true,
    },
    {
        title: "Cyber Fiction Website | HTML & Tailwind CSS",
        description: "A responsive Cyber Fiction platform built with HTML, canvas, locomotive, Tailwind CSS,",
        image: "/assets/images/webp/project-thumbnail-img-2.webp",
        link: "https://cyber-fiction-lyart.vercel.app/",
        tags: ["GSAP", "Firebase", "Responsive"],
        code: "",
        showInProjects: true,
    },
    {
        title: "Allsome / A Copy Platform",
        description: "Sell & ship everywhere. Turn inventory into sales channels and grow faster.",
        image: "/assets/images/webp/project-thumbnail-img-3.webp",
        link: "https://allsome-next-xi.vercel.app/",
        tags: ["Next.js", "Tailwind", "Vercel"],
        code: "",
        showInProjects: true,
    },
    {
        title: "Blog Website",
        description: "Blog Website built with Next.js, Tailwind CSS, and hosted on Vercel.",
        image: "/assets/images/webp/project-thumbnail-img-4.webp",
        link: "https://arrow-trade-ten.vercel.app/",
        tags: ["Next.js", "Tailwind", "Vercel"],
        code: "",
        showInProjects: false,
    },
    {
        title: "E-commerce Website | Next.js & Tailwind CSS",
        description: "A responsive e-commerce platform built with Next.js, Tailwind CSS,. Supports dynamic routing,",
        image: "/assets/images/webp/project-thumbnail-img-5.webp",
        link: "https://shop-nomvbosa9-amits-projects-fb1a793d.vercel.app/",
        tags: ["GSAP", "Firebase", "Responsive"],
        code: "",
        showInProjects: false,
    },
    {
        title: "Allsome / A Copy Platform",
        description: "Sell & ship everywhere. Turn inventory into sales channels and grow faster.",
        image: "/assets/images/webp/project-thumbnail-img-3.webp",
        link: "https://allsome-next-xi.vercel.app/",
        tags: ["Next.js", "Tailwind", "Vercel"],
        code: "",
        showInProjects: false,
    },
];

export const SERVICES_DATA_LIST = [
    {
        title: 'Web Development',
        description:
            'Building responsive and interactive websites with modern technologies like React, Next.js, and TailwindCSS.',
        icon: '/icons/web-development.svg',
        animation: webDevAnimation, // Lottie animation for Web Development
    },
    {
        title: 'UI/UX Design',
        description:
            'Designing clean, user-friendly, and visually appealing interfaces to provide the best user experience.',
        icon: '/icons/ui-ux-design.svg',
        animation: uiUxAnimation, // Lottie animation for UI/UX Design
    },
    {
        title: 'Frontend Development',
        description:
            'Developing dynamic and scalable frontend applications using HTML, CSS, JavaScript, and React.',
        icon: '/icons/frontend-development.svg',
        animation: frontendDevAnimation, // Lottie animation for Frontend Development
    },
    {
        title: 'SEO Optimization',
        description:
            'Optimizing your website for better visibility on search engines and improving overall performance.',
        icon: '/icons/seo-optimization.svg',
        animation: seoAnimation, // Lottie animation for SEO Optimization
    },
    {
        title: 'GSAP Animations',
        description:
            'Bringing websites to life with smooth, interactive animations using GSAP (GreenSock Animation Platform).',
        icon: '/icons/gsap-animations.svg',
        animation: gsapAnimation, // Lottie animation for GSAP Animations
    },
    {
        title: 'Custom Animations',
        description:
            'Creating custom animations to enhance user experience and engagement using CSS, JavaScript, and various animation libraries.',
        icon: '/icons/custom-animations.svg',
        animation: customAnimAnimation, // Lottie animation for Custom Animations
    },
];

export const SKILL_DATA = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Expert" },
    { name: "Gsap", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Git HUb", level: "Expert" },
    { name: "TailwindCSS", level: "Expert" },
];

export const INTEGRATIONS_DATA = [
    { src: "/assets/images/webp/html-img.webp", alt: "logo-1", animation: "zoomIn" },
    { src: "/assets/images/webp/css-logo.webp", alt: "logo-2", animation: "zoomIn" },
    { src: "/assets/images/webp/js-logo.webp", alt: "logo-3", animation: "zoomOut" },
    { src: "/assets/images/webp/git-logo.webp", alt: "logo-4", animation: "zoomOut" },
    { src: "/assets/images/webp/gsap-logo.webp", alt: "logo-5", animation: "zoomIn" },
    { src: "/assets/images/webp/material-ui-logo.webp", alt: "logo-6", animation: "zoomOut" },
    { src: "/assets/images/webp/github-logo.webp", alt: "logo-7", animation: "zoomOut" },
    { src: "/assets/images/webp/react-logo.webp", alt: "logo-8", animation: "zoomIn" },
    { src: "/assets/images/webp/next-js-logo.webp", alt: "logo-9", animation: "zoomOut" },
    { src: "/assets/images/webp/tailwind-css-logo.webp", alt: "logo-10", animation: "zoomIn" },
    { src: "/assets/images/webp/seo-logo.webp", alt: "logo-11", animation: "zoomIn" },
];
export const INTEGRATIONS_DATA_POSITION = [
    "xl:right-[390px] sm:right-[306px] right-[20px]",
    "md:right-14 lg:right-12 xl:right-0 right-7",
    "md:top-[70px] sm:top-14 top-8 xl:left-[188px] lg:left-[100px] sm:left-[70px] left-12",
    "xl:top-[70px] sm:top-12 top-7 md:right-[139px] sm:right-28 right-16",
    "xl:top-[130px] sm:top-28 top-16 md:left-[228px] sm:left-[190px] left-16",
    "md:top-[160px] sm:top-28 top-16 md:right-[119px] sm:right-24 right-12",
    "xl:top-[180px] lg:top-[160px] sm:top-36 top-24 sm:left-[62px] md:left-12 lg:left-[62px] left-0",
    "xl:top-[287px] lg:top-[250px] sm:top-48 top-[128px] xl:left-[155px] lg:left-[80px] sm:left-32 left-12",
    "md:top-[229px] sm:top-44 top-24 xl:right-[193px] md:right-52 lg:right-44 right-[120px]",
    "md:top-[202px] sm:top-36 top-[90px] right-3",
    "md:top-[307px] sm:top-[215px] top-[128px] sm:right-[72px] right-10",
];