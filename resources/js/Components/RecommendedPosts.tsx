import { Post } from "@/types/Post";

interface RecommendedPostsProps {
    posts: Post[];
}

export default function RecommendedPosts({ posts }: RecommendedPostsProps) {
    return (
        <div className="flex flex-row gap-4 w-3/5 mx-auto">
            {posts.map(post => (
                <a href={`/posts/${post.id}`}>
                    <div key={post.id} className="flex flex-col gap-2 group hover:scale-105 transition-all duration-500 ease-in-out mt-1">
                        <img src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=" alt={post.title} className="rounded-lg" />
                        <span className="text-[#e8e4ef] font-bold text-lg">{post.title}</span>
                        <span className="flex flex-row gap-2 opacity-75">
                            <p>
                                {Math.ceil(post.content.split(" ").length / 200) + " min read"}
                            </p>
                            <p>
                                {new Intl.DateTimeFormat("en-US", {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                }).format(new Date(post.published_at ?? new Date()))}
                            </p>
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
