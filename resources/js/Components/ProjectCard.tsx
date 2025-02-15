import ExperienceTechnologyTag from "@/Components/ExperienceTechnologyTag";

interface Props {
    name: string;
    github_url: string;
    description: string;
    technologies: string[];
}

export default function ProjectCard({ name, github_url, description, technologies = [] }: Props) {
    return (
        <a href={github_url} target="_blank" rel="noreferrer" className="group">
            <div className="flex flex-col flex-grow lg:gap-2 shadow-md lg:p-4 rounded-lg lg:hover:bg-[#1d172a] lg:hover:border-accentColor transition duration-500 ease-in-out text-textColor group">
                <h2>
                    <span className="font-bold">{name}</span>
                    <img src="storage/images/link.svg" alt="Link" className="w-4 inline group-hover:animate-bounce lg:ml-2 ml-1" />
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap mt-2">
                    {technologies.map((technology, index) => (
                        <ExperienceTechnologyTag key={index} technology={technology} />
                    ))}
                </div>
            </div>
        </a>
    );
}
