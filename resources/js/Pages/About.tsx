import { Head, Link } from '@inertiajs/react';
import AboutLeftSection from "@/Components/AboutLeftSection";
import AboutRightSection from "@/Components/AboutRightSection";
import { Post } from "@/types/Post";

interface Props {
    posts: Post[];
}


export default function Index({ posts }: Props) {
    return (
        <div className="bg-[#0E0B14] lg:h-full font-family-asar">
            <Head title="About me" />
            <div className="lg:flex lg:flex-row lg:justify-center lg:align-center lg:gap-20 lg:mx-auto lg:w-3/5 lg:pb-10">
                <AboutLeftSection />
                <AboutRightSection posts={posts}/>
            </div>
        </div>
    );
}
