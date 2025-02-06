export interface TagName {
    id: number;
    name: string;
    slug: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password?: string;
    remember_token?: string | null;
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
    id: number;
    title: string;
    slug: string;
    content: string;
    published_at: string | null;
    image?: string;
    tags: TagName[];
}
