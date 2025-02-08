import AboutRightSectionText from "@/Components/AboutRightSectionText";
import ExperienceCard from "@/Components/ExperienceCard";

export default function AboutRightSection() {
    return (
        <div className="flex flex-col justify-start bg-[#0E0B14] pl-10 py-10">
            <ExperienceCard duration={"2024-2025"} company={"IBM"} position={"Software Developer"} description={"Create personalized customer experiences across email, SMS, mobile push, and more with real-time data and AI-driven insights."} technologies={["React", "Laravel", "TailwindCSS"]} />
        </div>
    )
}
