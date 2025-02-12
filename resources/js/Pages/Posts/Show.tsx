import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Post, TagName, Vote, Comment } from '@/types/Post';
import { PageProps } from "@/types";
import TagsArticle from "@/Components/TagsArticle";
import RecommendedPosts from "@/Components/RecommendedPosts";
import Controls from "@/Components/Controls";

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
            <div className="flex flex-col lg:justify-center lg:align-center mx-auto lg:w-3/5 lg:pt-10 pt-6 w-full">
                <Head title={post.title} />
                <h1 className="lg:text-center text-t lg:font-extrabold font-bold lg:text-3xl text-2xl lg:w-3/5 w-4/5 mx-auto">{post.title}</h1>
                <div className="flex flex-row justify-center lg:text-left text-center mx-auto align-center pt-2 opacity-75 gap-5 w-4/5">
                    <p>{minutesNeeded} {minutes} read</p>
                    -
                    <p>{formattedDate}</p>
                </div>
                <div className="lg:w-3/5 w-4/5 mx-auto bg-[#4d367a] text-[#4d367a] h-0.5 rounded mb-3"></div>
                <Controls />
                <div className="flex flex-col justify-center align-center lg:pt-5 lg:w-3/5 w-4/5 align-center mx-auto mb-5 mt-2 lg:mt-0">
                    <div dangerouslySetInnerHTML={{ __html: html_content }} className='prose prose-invert max-w-none'/>
                </div>
                <TagsArticle tags={tags}/>
                <div className="lg:w-3/5 w-4/5 mx-auto bg-[#4d367a] text-[#4d367a] h-0.5 rounded mt-5"></div>

                <RecommendedPosts posts={recentPosts}/>

            </div>

        </div>
    );
}
