import { Post } from "@/types/Post";

interface RecommendedPostsProps {
    posts: Post[];
}

export default function RecommendedPosts({ posts }: RecommendedPostsProps) {
    return (
        <div className="flex lg:flex-row flex-col lg:gap-4 gap-6 lg:w-3/5 w-4/5 mx-auto mb-10 lg:mb-0">
            {posts.map(post => (
                <a href={`/posts/${post.id}`}>
                    <div key={post.id} className="flex lg:flex-col flex-row lg:gap-2 gap-4 group lg:hover:scale-105 lg:transition-all lg:duration-500 lg:ease-in-out mt-1 align-baseline justify-center">
                        <img src={post.image_url ?? "../storage/images/placeholder.png"} alt={post.title} className="lg:rounded-lg lg:w-full w-2/5 h-full rounded-md" />
                        <div>
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
                    </div>
                </a>
            ))}
        </div>
    );
}
