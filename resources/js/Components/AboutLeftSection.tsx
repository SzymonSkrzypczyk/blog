import AboutMeBulletPointSectionItem from "@/Components/AboutMeBulletPointSectionItem";

export default function AboutLeftSection() {
    return (
        <div className="flex flex-col justify-between h-screen pl-10 py-10 bg-[#0E0B14] text-[#E8E4EF]">
            <div>
                <h1 className="text-4xl mb-1">Szymon Skrzypczyk</h1>
                <h4 className="text-2xl">Software developer</h4>

                <div className="mt-20 flex flex-col gap-2">
                    <AboutMeBulletPointSectionItem section={"About me"} />
                    <AboutMeBulletPointSectionItem section={"Projects"} />
                    <AboutMeBulletPointSectionItem section={"Education"} />
                </div>
            </div>

            <div className="mt-auto mb-10 flex flex-row gap-4">
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" className="w-10"/>
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" className="w-10"/>
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" className="w-10"/>
            </div>
        </div>

    )
}
