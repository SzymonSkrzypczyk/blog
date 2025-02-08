import { Head, Link } from '@inertiajs/react';
import AboutLeftSection from "@/Components/AboutLeftSection";
import AboutRightSection from "@/Components/AboutRightSection";

export default function Index() {
    return (
        <div className="bg-[#0E0B14] h-full font-family-asar">
            <Head title="About me" />
            <div className="flex flex-row justify-center align-center gap-20 mx-auto w-3/5">
                <AboutLeftSection />
                <AboutRightSection />
            </div>
        </div>
    );
}
