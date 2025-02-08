import { Head, Link } from '@inertiajs/react';
import AboutLeftSection from "@/Components/AboutLeftSection";

export default function Index() {
    return (
        <>
            <Head title="About me" />
            <h1>Hello there</h1>
            <div className="flex">
                <AboutLeftSection />
            </div>
        </>
    );
}
