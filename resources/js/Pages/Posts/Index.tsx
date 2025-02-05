import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Post } from '@/types/Post';
import {PageProps} from "@/types";

// Extend PageProps to include posts
interface PagePropsWithPosts extends PageProps {
    posts: Post[];
}

export default function Index() {
    // Use `usePage` with the extended type
    const { posts } = usePage<PagePropsWithPosts>().props;

    return (
        <>
            <Head title="Posts" />
            <div>
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.content}</p>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700">Read more</Link>
                    </div>
                ))}
            </div>
        </>
    );
}
