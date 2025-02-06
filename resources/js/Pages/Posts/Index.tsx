import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import {Post, TagName} from '@/types/Post';
import { PageProps } from "@/types";
import PostList from "@/Components/PostList";
import NavBar from "@/Components/NavBar";
import TagsList from "@/Components/TagsList";

interface PagePropsWithPosts extends PageProps {
    posts: Post[];
    tags: TagName[];

}

export default function Index() {
    const { posts, tags } = usePage<PagePropsWithPosts>().props;

    return (
        <div className="bg-[#010104] h-100%">
            <Head title="Posts" />
            <NavBar />
            <TagsList tags={tags} />
            <PostList posts={posts} />
        </div>
    );
}
