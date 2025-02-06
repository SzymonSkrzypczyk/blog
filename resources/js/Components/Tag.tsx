import { Link } from '@inertiajs/react';
import { TagName } from "@/types/Post"; // Ensure correct import path

interface TagProps {
    tag: TagName;
}

export default function Tag({ tag }: TagProps) {
    return (
        <span className="inline-block px-4 py-2 rounded bg-[#473FDE] text-[#EAE9FC] hover:bg-[#5850e1]">{tag.name}</span>
    );
}
