import ExperienceTechnologyTag from "@/Components/ExperienceTechnologyTag";

interface Props {
    duration: string;
    company: string;
    position: string;
    description: string;
    technologies: string[];
}

export default function ExperienceCard({ duration, company, position, description, technologies = [] }: Props) {
    return (
        <div className="flex lg:flex-row flex-col text-[#e8e4ef] lg:gap-4 lg:shadow-md lg:p-4 rounded-lg lg:hover:bg-[#1d172a] hover:border-[#8567c2] transition duration-500 ease-in-out py-1">
            <h3 className="whitespace-nowrap opacity-75 self-baseline lg:p-0 pb-2">{duration}</h3>
            <div className="flex flex-col gap-0 flex-grow">
                <h2 className="text-lg lg:text-normal">
                    <span className="font-bold">{position}</span> at <span className="font-bold">{company}</span>
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap mt-2">
                    {technologies.map((technology, index) => (
                        <ExperienceTechnologyTag key={index} technology={technology} />
                    ))}
                </div>
            </div>
        </div>
    );
}
