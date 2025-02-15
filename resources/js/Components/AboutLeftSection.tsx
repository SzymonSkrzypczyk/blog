import AboutMeBulletPointSectionItem from "@/Components/AboutMeBulletPointSectionItem";
import { useEffect, useState } from "react";

interface Props {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function AboutLeftSection({ activeSection, setActiveSection }: Props) {
    const [dynamicText, setDynamicText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = ["Software Developer", "Pythonista", "Latte Macchiato Enjoyer", "Gamer"];

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const fullText = titles[currentIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing effect
                if (dynamicText.length < fullText.length) {
                    setDynamicText(fullText.slice(0, dynamicText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (dynamicText.length > 0) {
                    setDynamicText(fullText.slice(0, dynamicText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [dynamicText, isDeleting, currentIndex]);

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
        <div className="lg:flex lg:flex-col lg:justify-between lg:h-screen lg:pl-10 lg:py-10 bg-[#0E0B14] text-[#E8E4EF] lg:sticky lg:top-0 px-5 py-10">
            <div>
                <h1 className="lg:text-4xl lg:mb-1 lg:leading-none lg:whitespace-nowrap lg:font-medium text-3xl font-extrabold mb-0">
                    Szymon Skrzypczyk
                </h1>
                <h4 className="lg:text-2xl lg:font-light font-medium text-xl lg:h-[2rem] h-[1.333rem]">{dynamicText}</h4>

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
                <a href="https://github.com/SzymonSkrzypczyk">
                    <img src="storage/images/github.svg" className="lg:w-10 w-5" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/szymon-skrzypczyk-b6a4b31b3/">
                    <img src="storage/images/linkedin.svg" className="lg:w-10 w-5" alt="LinkedIn" />
                </a>
                <a href="mailto:Szymon.Skrzypczyk@vp.pl">
                    <img src="storage/images/mail.svg" className="lg:w-10 w-5" alt="Mail" />
                </a>
                <a href="" onClick={() => { window.open("storage/Szymon_Skrzypczyk_CV.pdf"); }}>
                    <img src="storage/images/cv-icon.svg" className="lg:w-10  w-5" alt="CV" />
                </a>
            </div>
        </div>
    );
}
