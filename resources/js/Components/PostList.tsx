import { Post } from "@/types/Post";
import PostCard from "./PostCard";
import {Link} from "@inertiajs/react"; // Import the PostCard component

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="flex flex-col gap-4 w-4/6 mx-auto">
            <h1 className="text-4xl m-2 text-[#ebe9fc]">Latest Posts</h1>
            <div className="grid grid-cols-3 gap-4 mx-2">
                {posts.map(post => (
                    <div key={post.id}>
                        <Link href={route('posts.show', post.id)}>
                            <PostCard post={post} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
