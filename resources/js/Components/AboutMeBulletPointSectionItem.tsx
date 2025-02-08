interface PagePropsBulletPoint {
    section: string;
}

export default function AboutMeBulletPointSectionItem({ section }: PagePropsBulletPoint) {
    return (
        <div className="flex-row flex items-center gap-2 group">
                        <span
                            className="origin-left w-10 bg-[#8567c2] h-1 group-hover:w-20 ml-2 ease-in-out duration-400 rounded"></span>
            <span>{section}</span>
        </div>
    );
}
