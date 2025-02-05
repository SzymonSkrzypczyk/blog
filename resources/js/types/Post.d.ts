export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    published_at: string | null;
    image?: string;
    tags: Tag[];
}
