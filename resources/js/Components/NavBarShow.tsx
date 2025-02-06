import { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";

export default function NavBarShow() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollWidth = document.documentElement.scrollWidth - window.innerWidth;
            const scrollProgress = (window.scrollX / scrollWidth) * 100;
            setScrollPosition(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="my-0">
                <NavBar />
                <div className="h-1 bg-transparent mt-2">
                    <div
                        className="h-full bg-[#a553db] transition-all duration-200 w-4/6 mx-auto"
                        style={{ width: `${scrollPosition}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
