'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PageLoader = () => {
    const [preLoader, setPreLoader] = useState(true);

    useEffect(() => {
        const start = performance.now();
        document.documentElement.style.overflow = 'hidden';

        const delay = 1000; // 1 second

        const timer = setTimeout(() => {
            const elapsed = performance.now() - start;
            const remaining = delay - elapsed;

            setTimeout(() => {
                document.documentElement.style.overflow = '';
                setPreLoader(false);
            }, Math.max(0, remaining));
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        preLoader && (
            <div className="h-screen w-full bg-white/70 fixed inset-0 z-[700] flex justify-center items-center">
                <Image
                    src="/assets/images/gif/preloader.gif"
                    alt="preloader"
                    width={64}
                    height={64}
                    className="xl:size-14 lg:size-12 md:size-10 size-8 rounded-full"
                />
            </div>
        )
    );
};

export default PageLoader;
