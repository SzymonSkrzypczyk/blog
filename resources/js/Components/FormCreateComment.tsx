import React, { useState } from 'react';
import { Post, User, Comment } from '@/types/Post';

interface CommentFormProps {
    post: Post;
    user: User;
    onSubmit: (comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ post, user, onSubmit }) => {
    const [content, setContent] = useState('');
    // const [publishedAt] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newComment: Comment = {
            id: 0,
            user_id: user.id,
            post_id: post.id,
            content: content,
            created_at: new Date().toISOString(),
            user: user,
        };

        onSubmit(newComment);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-4">
            <h2 className="text-lg font-bold">Add a Comment</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                placeholder="Enter your comment"
                className="border rounded p-2"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
                disabled={!content}
            >
                Submit Comment
            </button>
        </form>
    );
};

export default CommentForm;
