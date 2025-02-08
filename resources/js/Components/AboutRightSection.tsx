import AboutRightSectionText from "@/Components/AboutRightSectionText";
import ExperienceCard from "@/Components/ExperienceCard";
import ProjectCard from "@/Components/ProjectCard";

export default function AboutRightSection() {
    return (
        <div className="flex flex-col justify-start bg-[#0E0B14] pl-10 py-10 gap-20">
            <div id="about">
                <AboutRightSectionText />
            </div>
            <div id="experience" className="flex flex-col gap-2">
                <ExperienceCard duration={"January 2025-Onwards"} company={"IBM"} position={"Software Developer Intern"} description={"I am responsible for creating and maintaining an application for analysing of packages from our main product ILMT."} technologies={["Python", "FastAPI", "TypeScript"]} />
                <ExperienceCard duration={"March 2024-January 2025"} company={"IBM"} position={"Support Engineer"} description={"I was responsible for creating a chatbot for support team of ILMT product and additional projects used for analysing results coming from the product."} technologies={["Python", "Langchain", "JavaScript"]} />
            </div>
            <div id="projects">
                <ProjectCard name={"Personal Blog"} github_url={"https://github.com/SzymonSkrzypczyk/blog"} description={"Blog I have created as a mean of sharing my insights into some issues I came across during my work and personal projects."} technologies={["React", "Laravel", "TailwindCSS"]} />
                <ProjectCard name={"LLM CV Creator"} github_url={"https://github.com/SzymonSkrzypczyk/LLM_cv_maker"} description={"Website created by me and my friends as a project for our course, which aimed at easing the process of creating personalized CVs for a given position."} technologies={["Laravel", "TailwindCSS", "Vue", "Langchain"]} />
                <ProjectCard name={"Student's ID Generator"} github_url={"https://github.com/SzymonSkrzypczyk/legitymacja"} description={"Generator of student's IDs for AGH University made during lectures, which I found quite boring at the time ;)"} technologies={["Python", "Pillow"]} />
                <ProjectCard name={"Trivia Generator"} github_url={"https://github.com/SzymonSkrzypczyk/trivia_generator"} description={"Generator of trivia questions that are generated using LLM and serialized in a database using GoLang."} technologies={["GoLang", "FastAPI", "Langchain", "Ollama"]} />
                <div className="flex flex-row pl-2 ml-2 group gap-2 align-baseline">
                    <a href="https://github.com/SzymonSkrzypczyk?tab=repositories" className="text-[#e8e4ef] font-bold text-xl">More projects</a>
                    <img src="storage/images/link-arrow.svg" alt="arrow" className="group-hover:animate-ping duration-700 transition-all w-4"/>
                </div>
            </div>
        </div>
    )
}
