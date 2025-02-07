import { Head } from "@inertiajs/react";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import NavBar from "@/Components/NavBar";
import { useForm } from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";

// Define the interface for the form data
interface PostFormData {
    title: string;
    content: string;
    image: File | null;
    [key: string]: any;
}

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<PostFormData>({
        title: "",
        content: "",
        image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        if (data.image) {
            formData.append("image", data.image);
        }

        Inertia.post(route("posts.store"), formData);
    };

    return (
        <div>
            <Head title="Create Post" />
            <NavBar />
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="Enter post title"
                    className="w-full my-4 px-4 py-2 border rounded focus:outline-none"
                />
                <MDEditor
                    value={data.content}
                    onChange={(value) => setData("content", value || "")}
                    className="w-full mx-auto my-6 border"
                />
                <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg"
                    onChange={(e) =>
                        setData("image", e.target.files ? e.target.files[0] : null)
                    }
                    className="w-full my-4"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded my-4"
                    disabled={processing}
                >
                    {processing ? "Creating..." : "Create Post"}
                </button>
            </form>

            {errors.title && <div className="text-red-500">{errors.title}</div>}
            {errors.content && <div className="text-red-500">{errors.content}</div>}
        </div>
    );
}
