import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Post, TagName, Vote, Comment } from '@/types/Post';
import { PageProps } from "@/types";
import NavBarShow from "@/Components/NavBarShow";

interface PagePropsShow extends PageProps {
    post: Post;
    tags: TagName[];
    votes: Vote[];
    comments: Comment[];
    points_summed: number;
}

export default function Show() {
    const { post, tags, votes, comments, points_summed } = usePage<PagePropsShow>().props;

    return (
        <div>
            <Head title={post.title} />
            <NavBarShow key={post.id} />

            {comments.map((comment) => (
                <div key={comment.id} className="flex flex-col justify-start">
                    <h3>{comment.user.name}</h3>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
}
