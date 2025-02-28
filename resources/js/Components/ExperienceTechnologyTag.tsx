interface Props {
    technology: string;
}

export default function ExperienceTechnologyTag({ technology }: Props) {
    return (
        <span className="bg-secondaryColor text-white text-xs px-2 py-1 rounded-full mr-2">
            {technology}
        </span>
    );
}
