import { Post } from "@/types/Post";
import PostCard from "./PostCard"; // Import the PostCard component

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl m-2">Latest Posts</h1>
            <div className="grid grid-cols-3 gap-4 mx-2">
                {posts.map(post => (
                    <div key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
