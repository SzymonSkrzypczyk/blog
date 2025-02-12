import { Head } from '@inertiajs/react';
import { Post, TagName } from '@/types/Post';
import PostCard from "@/Components/PostCard";
import Controls from "@/Components/Controls";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PagePropsWithPosts {
    posts: Post[];
    tags: TagName[];
}

export default function Index({ posts, tags }: PagePropsWithPosts) {
    const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const POSTS_PER_LOAD = 6;

    useEffect(() => {
        setVisiblePosts(posts.slice(0, POSTS_PER_LOAD));
        setLoadedCount(POSTS_PER_LOAD);
    }, [posts]);

    const loadMorePosts = () => {
        const nextBatch = posts.slice(loadedCount, loadedCount + POSTS_PER_LOAD);

        if (nextBatch.length > 0) {
            setVisiblePosts(prev => [...prev, ...nextBatch]);
            setLoadedCount(prev => prev + POSTS_PER_LOAD);

            setTimeout(() => {
                const bottom = document.documentElement.scrollHeight;

                if (window.innerWidth > 1024) {
                    window.scrollTo({
                        top: bottom,
                        behavior: 'smooth'
                    });
                }
            }, 100);

        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredPosts = posts
        .filter(post => post.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        .slice(0, loadedCount);

    return (
        <div className="bg-[#010104] min-h-screen text-[#e8e4ef] font-family-asar pb-10">
            <Head title="Szymon Skrzypczyk - Blog"/>
            <div className="flex flex-col justify-center align-center mx-auto w-3/5 pt-10 lg:px-6">
                <div className="flex lg:flex-row align-baseline justify-between flex-col">
                    <h1 className="lg:text-3xl lg:font-bold text-3xl font-extrabold whitespace-nowrap text-center">Latest posts</h1>
                    <Controls/>
                    <div className="flex lg:justify-center lg:py-4">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="lg:w-1/2 lg:px-4 lg:py-2 lg:border lg:rounded-lg lg:focus:outline-none lg:bg-[#4d367a]
                            lg:text-[#e8e4ef] lg:border-none lg:outline-none lg:border-transparent lg:focus:border-transparent
                            lg:focus:ring-0 lg:w-4/5 hidden lg:block"
                        />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 pt-6 lg:w-3/5 w-4/5 mx-auto">
                {filteredPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: (index % 6) * 0.1, duration: 0.5}}
                    >
                        <a href={`posts/${post.id}`}><PostCard post={post}/></a>
                    </motion.div>
                ))}
            </div>

            {filteredPosts.length >= POSTS_PER_LOAD && loadedCount < posts.length && (
                <div className="flex justify-center pt-6">
                    <button
                        onClick={loadMorePosts}
                        className="px-6 py-2 bg-[#3a31d8] text-[#e8e4ef] font-bold text-xl rounded-lg hover:bg-[#4a39e4] transition-all lg:animate-bounce"
                    >
                        Load More
                    </button>
                </div>
            )}

            {showScrollToTop && (
                <img
                    src="storage/images/scroll-up.svg"
                    onClick={scrollToTop}
                    aria-label="Scroll to Top"
                    className="fixed bottom-4 right-4 p-3 transition-all w-20 cursor-pointer"
                />
            )}
        </div>
    );
}
