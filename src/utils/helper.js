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
        title: "contact",
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
        path: "https://github.com/",
    },
    {
        iconImg: "/assets/images/svg/telegram-logo.svg",
        alt: "telegram-logo",
        path: "https://t.me/",
    },
    {
        iconImg: "/assets/images/svg/github-logo.svg",
        alt: "github-logo",
        path: "https://github.com/",
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
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js, Tailwind CSS, and hosted on Vercel.",
        image: "/assets/images/webp/project-thumbnail-img-1.webp",
        link: "https://your-portfolio-link.com",
        tags: ["Next.js", "Tailwind", "Vercel"],
    },
    {
        title: "Startup Landing Page",
        description: "Animated landing page using GSAP for smooth transitions and Firebase backend.",
        image: "/assets/images/webp/project-thumbnail-img-2.webp",
        link: "https://startup-demo.com",
        tags: ["GSAP", "Firebase", "Responsive"],
    },
    {
        title: "Weather App",
        description: "A simple weather application built using React and OpenWeatherMap API.",
        image: "/assets/images/webp/project-thumbnail-img-3.webp",
        link: "https://weather-now.com",
        tags: ["React", "API", "Styled UI"],
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
    { name: "Next.js", level: "Advanced" },
    { name: "Gsap", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Git HUb", level: "Advanced" },
    { name: "TailwindCSS", level: "Advanced" },
];