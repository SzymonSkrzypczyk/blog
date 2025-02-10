export interface TagName {
    id: number;
    name: string;
    slug: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    is_admin: boolean;
    created_at: string;
    updated_at: string;
}

export interface Vote {
    id: number;
    name: string;
    slug: string;
}

export interface Comment {
    id: number;
    user_id: number;
    post_id: number;
    content: string;
    created_at: string;
    user: User;
}

export interface Post {
    image_url: string | undefined;
    id: number;
    title: string;
    slug: string;
    content: string;
    published_at: string | null;
    image?: string;
    tags: TagName[];
}
