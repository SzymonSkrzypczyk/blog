import AboutMeBulletPointSectionItem from "@/Components/AboutMeBulletPointSectionItem";
import { useEffect, useState } from "react";

export default function AboutLeftSection() {
    const [activeSection, setActiveSection] = useState<string>(window.location.hash || "#about");

    useEffect(() => {
        const sections = document.querySelectorAll("#about, #experience, #projects, #blog");

        const handleScroll = () => {
            let currentSection = "#about";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 250 && rect.bottom >= 250) {
                    currentSection = `#${section.id}`;
                }
            });

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
                window.history.replaceState(null, "", currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    return (
        <div className="lg:flex lg:flex-col lg:justify-between lg:h-screen lg:pl-10 lg:py-10 bg-[#0E0B14] text-[#E8E4EF] lg:sticky lg:top-0 pl-5 py-10">
            <div>
                <h1 className="lg:text-4xl lg:mb-1 lg:leading-none lg:whitespace-nowrap lg:font-medium text-2xl font-bold mb-0 ">Szymon Skrzypczyk</h1>
                <h4 className="lg:text-2xl lg:font-light font-medium text-lg">Software Developer</h4>

                <div className="lg:mt-20 lg:flex lg:flex-col lg:gap-2 hidden ">
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

            <div className="lg:mt-auto lg:mb-10 flex flex-row gap-4 align-baseline mt-5">
                <a href="https://github.com/SzymonSkrzypczyk"><img src="storage/images/github.svg" className="lg:w-10 w-5" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/szymon-skrzypczyk-b6a4b31b3/"><img src="storage/images/linkedin.svg" className="lg:w-10 w-5" alt="LinkedIn"/></a>
                <a href="mailto:Szymon.Skrzypczyk@vp.pl"><img src="storage/images/mail.svg" className="lg:w-10 w-5" alt="Mail"/></a>
                <a href="" onClick={() => {window.open("storage/Szymon_Skrzypczyk_CV.pdf")}}><img src="storage/images/cv-icon.svg" className="lg:w-10  w-5" alt="CV"/></a>
            </div>
        </div>
    );
}
