import { TagName } from "@/types/Post";

export default function TagsArticle({ tags }: { tags: TagName[] }) {
    return (
        <div className="flex flex-row gap-2 lg:w-3/5 w-4/5 mx-auto">
            {tags.map((tag) => (
                <div key={tag.id} className="flex flex-row gap-2">
                    <span className="text-[#e8e4ef] font-bold text-xl rounded-xl px-4 py-2 bg-[#473FDE] hover:bg-[#5850e1] border-[#8567c2] shadow-md shadow-[#8567c2] origin-top-right">
                        {tag.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
