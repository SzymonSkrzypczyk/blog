import { Link } from '@inertiajs/react';
import { Post } from "@/types/Post"; // Ensure correct import path

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="flex flex-col bg-[#020024] rounded">
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"
                 className="w-100% p-2 rounded"/>
            <h2 className="text-3xl p-2 w-200 text-[#EAE9FC]">Why we are discontinuing company sources and moving
                forward with squads</h2>
            <div className="flex flex-row gap-3 p-2">
                <span className="inline-block px-4 py-2 rounded bg-[#473FDE] text-[#EAE9FC]">tag 1</span>
                <span className="inline-block px-4 py-2 bg-[#473FDE] text-[#EAE9FC] rounded">tag 1</span>
                <span className="inline-block px-4 py-2 bg-[#473FDE] text-[#EAE9FC] rounded">tag 1</span>
            </div>
            <p className="text-[#0A03EA] p-2 text-xl">February 5, 2025</p>
        </div>
    );
}
