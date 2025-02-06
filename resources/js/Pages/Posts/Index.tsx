import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Post } from '@/types/Post';
import { PageProps } from "@/types";
import PostList from "@/Components/PostList";
import NavBar from "@/Components/NavBar";

interface PagePropsWithPosts extends PageProps {
    posts: Post[];
}

export default function Index() {
    const { posts } = usePage<PagePropsWithPosts>().props;

    return (
        <div className="bg-[#010104] h-100%">
            <Head title="Posts" />
            <NavBar />
            <PostList posts={posts} />
        </div>
    );
}
