import { Head } from '@inertiajs/react';
import { Post, TagName } from '@/types/Post';
import PostCard from "@/Components/PostCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PagePropsWithPosts {
    posts: Post[];
    tags: TagName[];
}

export default function Index({ posts, tags }: PagePropsWithPosts) {
    const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, 6));
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const loadMorePosts = () => {
        setVisiblePosts(prev => [
            ...prev,
            ...posts.slice(prev.length, prev.length + 6)
        ]);

        setTimeout(() => {
            const bottom = document.documentElement.scrollHeight;
            window.scrollTo({
                top: bottom,
                behavior: 'smooth'
            });
        }, 200);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-[#010104] min-h-screen text-[#e8e4ef] font-family-asar">
            <Head title="Szymon Skrzypczyk - Blog" />
            <div className="flex flex-col justify-center align-center mx-auto w-3/5 pt-10 px-6">
                <h1 className="text-2xl font-bold">Latest posts</h1>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 w-3/5 mx-auto">
                {visiblePosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: (index % 6) * 0.2,
                            duration: 0.5,
                        }}
                    >
                        <a href={`posts/${post.id}`}><PostCard post={post} /></a>
                    </motion.div>
                ))}
            </div>

            {visiblePosts.length < posts.length && (
                <div className="flex justify-center pt-6">
                    <button
                        onClick={loadMorePosts}
                        className="px-6 py-2 bg-[#3a31d8] text-[#e8e4ef] font-bold text-xl rounded-lg hover:bg-[#4a39e4] transition-all animate-bounce"
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
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 align-baseline">
                <a href={route("home")}><img src="../storage/images/home-icon.svg" alt="Home" className="w-10"/></a>
                <a href="/posts"><img src="../storage/images/blog-icon.svg" alt="Blog" className="w-12"/></a>
            </div>
        </div>
    );
}
