import { Link } from '@inertiajs/react';
import { Post } from "@/types/Post"; // Ensure correct import path
import Tag from "./Tag";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const formattedDate = post.published_at
        ? new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(post.published_at))
        : "Date not available";

    return (
        <div className="flex flex-col bg-[#020024] rounded-md hover:bg-[#040040] h-full px-1 py-1 border-2 border-[#040040]">
            <img
                src={post.image_url ?? "../storage/images/placeholder.png"}
                alt="image"
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-3xl p-2 text-[#EAE9FC] line-clamp-2">{post.title}</h2>
            <div className="flex flex-wrap gap-2 p-2">
                {post.tags.map(tag => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </div>
            <p className="text-[#f3f2fd] p-2 text-xl mt-auto">{formattedDate}</p>
        </div>
    );
}
