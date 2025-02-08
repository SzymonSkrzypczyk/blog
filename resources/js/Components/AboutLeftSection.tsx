import AboutMeBulletPointSectionItem from "@/Components/AboutMeBulletPointSectionItem";
import { Link } from '@inertiajs/react';
import { useEffect, useState } from "react";

export default function AboutLeftSection() {
    const [activeSection, setActiveSection] = useState<string>(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveSection(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <div className="flex flex-col justify-between h-screen pl-10 py-10 bg-[#0E0B14] text-[#E8E4EF] sticky top-0">
            <div>
                <h1 className="text-4xl mb-1 leading-none whitespace-nowrap font-medium">Szymon Skrzypczyk</h1>
                <h4 className="text-2xl font-light">Software developer</h4>

                <div className="mt-20 flex flex-col gap-2">
                    <a href="#about">
                        <AboutMeBulletPointSectionItem section="About me" active={activeSection === "#about"} />
                    </a>
                    <a href="#experience">
                        <AboutMeBulletPointSectionItem section="Experience" active={activeSection === "#experience"} />
                    </a>
                    <a href="#projects">
                        <AboutMeBulletPointSectionItem section="Projects" active={activeSection === "#projects"} />
                    </a>
                    <a href="#blog">
                        <AboutMeBulletPointSectionItem section="Blog" active={activeSection === "#blog"} />
                    </a>
                </div>
            </div>

            <div className="mt-auto mb-10 flex flex-row gap-4 align-baseline">
                <a href="https://github.com/SzymonSkrzypczyk"><img src="storage/images/github.svg" className="w-10" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/szymon-skrzypczyk-b6a4b31b3/"><img src="storage/images/linkedin.svg" className="w-10" alt="LinkedIn"/></a>
                <a href="mailto:Szymon.Skrzypczyk@vp.pl"><img src="storage/images/mail.svg" className="w-10" alt="Mail"/></a>
                <a href="tu_moje_cv"><img src="storage/images/cv-icon.svg" className="w-10" alt="CV"/></a>
            </div>
        </div>
    );
}
