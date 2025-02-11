import { Post } from "@/types/Post";

interface Props {
    post: Post;
}

export default function AboutRightSectionPost({ post }: Props) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(new Date(post.published_at ?? new Date()));

    return (
        <a href={`/posts/${post.id}`} className="w-full">
            <div className="flex flex-row text-[#e8e4ef] gap-4 shadow-md rounded-lg lg:px-2 lg:hover:bg-[#1d172a] lg:hover:border-[#8567c2] transition duration-500 ease-in-out align-baseline leading-none py-8">
                <img src={post.image_url ?? "../storage/images/placeholder.png"} className="w-1/3 rounded"/>
                <div className="flex lg:flex-col pb-2 flex-col-reverse align-bottom">
                    <h2 className="lg:text-2xl font-bold break-words text-lg">{post.title}</h2>
                    <p className="opacity-75">{formattedDate}</p>
                </div>

            </div>
        </a>
    );
}
