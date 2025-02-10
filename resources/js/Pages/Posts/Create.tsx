import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Controls from "@/Components/Controls";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

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

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setData("image", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

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
        <div className="bg-[#010104] min-h-screen font-family-asar flex flex-col justify-center items-center p-6">
            <Head title="Create Post" />
            <div className="w-full max-w-3xl flex flex-col items-center">
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Uploaded Preview"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                )}

                <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    className="w-full my-4 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white text-center"
                />

                <form onSubmit={handleSubmit} className="w-full">
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Enter post title"
                        className="w-full my-4 px-4 py-2 border border-gray-600 rounded focus:outline-none bg-gray-900 text-white"
                    />

                    <MDEditor
                        value={data.content}
                        onChange={(value) => setData("content", value || "")}
                        className="w-full my-6 border border-gray-600"
                        data-color-mode="dark"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#4d367a] text-white font-bold text-2xl p-3 rounded-lg hover:bg-[#533a83] transition"
                        disabled={processing}
                    >
                        {processing ? "Creating..." : "Create Post"}
                    </button>
                </form>
                <Controls />

                {errors.title && <div className="text-red-500 mt-2">{errors.title}</div>}
                {errors.content && <div className="text-red-500 mt-2">{errors.content}</div>}
            </div>
        </div>
    );
}
