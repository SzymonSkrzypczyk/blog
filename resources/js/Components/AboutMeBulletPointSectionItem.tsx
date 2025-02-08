interface PagePropsBulletPoint {
    section: string;
    active?: boolean;
}

export default function AboutMeBulletPointSectionItem({ section, active }: PagePropsBulletPoint) {
    return (
        <div className="flex-row flex items-center gap-2 group font-bold">
            <span
                className={`origin-left w-10 bg-[#8567c2] h-1 ml-2 rounded
                            transition-all duration-500 ease-in-out
                            ${active ? "w-20" : "group-hover:w-20"}`}
            ></span>
            <span className={`transition-opacity duration-500 ${active ? "opacity-100" : "opacity-80"} `}>
                {section}
            </span>
        </div>
    );
}
