import { TagName } from "@/types/Post";


interface TagsListProps{
    tags: TagName[];
}

export default function TagsList({ tags }: TagsListProps) {
    return (
        <div className="flex flex-row gap-4 overflow-x-auto w-4/6 mx-auto">
            {tags.map(tag => (
                <span key={tag.id} className="inline-block px-4 py-2 rounded bg-[#473FDE] text-[#EAE9FC] hover:bg-[#5850e1]">{tag.name}</span>
            ))}
        </div>
    );

}
