interface PagePropsBulletPoint {
    section: string;
    active?: boolean;
}

export default function AboutMeBulletPointSectionItem({ section, active }: PagePropsBulletPoint) {
    return (
        <div className="lg:flex-row lg:flex lg:items-center lg:gap-2 lg:group lg:font-bold max-md:hidden">
            <span
                className={`lg:origin-left lg:w-10 lg:bg-[#8567c2] lg:h-1 lg:ml-2 lg:rounded
                            lg:transition-all lg:duration-500 lg:ease-in-out
                            ${active ? "w-20" : "group-hover:w-20"} lg:block`}
            ></span>
            <span className={`lg:transition-opacity lg:duration-500 ${active ? "lg:opacity-100" : "lg:opacity-80"} lg:block sm:hidden`}>
                {section}
            </span>
        </div>
    );
}
