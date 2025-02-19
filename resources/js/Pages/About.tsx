import { Head } from '@inertiajs/react';
import AboutLeftSection from "@/Components/AboutLeftSection";
import AboutRightSection from "@/Components/AboutRightSection";
import { Post } from "@/types/Post";
import {useState} from "react";

interface Props {
    posts: Post[];
}

export default function Index({ posts }: Props) {
    const [activeSection, setActiveSection] = useState<string>(window.location.hash || "#about");
    return (
        <div className="bg-backgroundColor lg:h-full font-family-asar">
            <Head title="Szymon Skrzypczyk" />
            <div className="lg:flex lg:flex-row lg:justify-center lg:align-center lg:gap-20 lg:mx-auto lg:w-3/5 lg:pb-20">
                <AboutLeftSection activeSection={activeSection} setActiveSection={setActiveSection} />
                <AboutRightSection posts={posts} activeSection={activeSection} setActiveSection={setActiveSection}/>
            </div>
        </div>
    );
}
