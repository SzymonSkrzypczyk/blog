import { Head, Link } from '@inertiajs/react';
import AboutLeftSection from "@/Components/AboutLeftSection";
import AboutRightSection from "@/Components/AboutRightSection";
import { Post } from "@/types/Post";

interface Props {
    posts: Post[];
}


export default function Index({ posts }: Props) {
    return (
        <div className="bg-[#0E0B14] h-full font-family-asar">
            <Head title="About me" />
            <div className="flex flex-row justify-center align-center gap-20 mx-auto w-3/5 pb-10">
                <AboutLeftSection />
                <AboutRightSection posts={posts}/>
            </div>
        </div>
    );
}
