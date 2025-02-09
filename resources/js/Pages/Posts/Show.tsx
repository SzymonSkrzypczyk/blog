import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Post, TagName, Vote, Comment } from '@/types/Post';
import { PageProps } from "@/types";
import TagsArticle from "@/Components/TagsArticle";
import RecommendedPosts from "@/Components/RecommendedPosts";

interface PagePropsShow extends PageProps {
    post: Post;
    tags: TagName[];
    votes: Vote[];
    comments: Comment[];
    points_summed: number;
    html_content: string;
    recentPosts: Post[];
}

export default function Show() {
    const { post, tags, html_content, recentPosts } = usePage<PagePropsShow>().props;
    let minutesNeeded: number = Math.ceil(post.content.split(" ").length / 200);
    let minutes = minutesNeeded === 1 ? "minute" : "minutes";
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(new Date(post.published_at ?? new Date()));

    return (
        <div className="min-h-screen bg-[#0E0B14] font-family-asar text-[#e8e4ef]">
            <div className="flex flex-col justify-center align-center mx-auto w-3/5 pt-10">
                <Head title={post.title} />
                <h1 className="text-center font-extrabold text-3xl w-3/5 mx-auto">{post.title}</h1>
                <div className="flex flex-row justify-center text-left   align-center pt-2 opacity-75 gap-5">
                    <p>{minutesNeeded} {minutes} read</p>
                    -
                    <p>{formattedDate}</p>
                </div>
                <div className="w-3/5 mx-auto bg-[#4d367a] text-[#4d367a] h-0.5 rounded mb-1"></div>
                <div className="flex flex-col justify-center align-center pt-5 w-3/5 align-center mx-auto mb-5">
                    <div dangerouslySetInnerHTML={{ __html: html_content }} />
                </div>
                <TagsArticle tags={tags}/>
                <div className="w-3/5 mx-auto bg-[#4d367a] text-[#4d367a] h-0.5 rounded mt-5"></div>
                <div className="flex flex-row justify-start items-center gap-2 pb-2 w-3/5 mx-auto">
                    <h2 className="text-[#e8e4ef] font-bold text-xl">More posts</h2>
                    <img src="../storage/images/arrow_down.svg" alt="arrow" className="animate-bounce duration-700 transition-all w-4"/>
                </div>
                <RecommendedPosts posts={recentPosts}/>
                <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 align-baseline">
                    <a href={route("home")}><img src="../storage/images/home-icon.svg" alt="Home" className="w-10"/></a>
                    <a href="/posts"><img src="../storage/images/blog-icon.svg" alt="Blog" className="w-12"/></a>
                </div>
            </div>

        </div>
    );
}
