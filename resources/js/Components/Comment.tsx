import { Comment as CommentName } from '@/types/Post';
import { PageProps } from "@/types";
import { usePage } from '@inertiajs/react';

interface CommentProps extends PageProps{
    comment: CommentName;
}

export default function Comment() {
    const { comment } = usePage<CommentProps>().props;
    return (
        <div className="flex flex-col justify-start">
            <h3>{comment.user.name}</h3>
        </div>
    )
}
