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
            <div className="flex flex-col flex-grow gap-2 shadow-md p-4 rounded-lg hover:bg-[#1d172a] hover:border-[#8567c2] transition duration-500 ease-in-out text-[#e8e4ef] group">
                <h2>
                    <span className="font-bold">{name}</span>
                    <img src="storage/images/link.svg" alt="Link" className="w-4 inline group-hover:animate-bounce ml-2" />
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
