import { Head } from "@inertiajs/react";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import NavBar from "@/Components/NavBar";

export default function Create() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

    return (
        <div>
            <Head title="Create Post" />
            <NavBar />
            <input className="w-2/6 my-6 mx-auto inline-block focus:outline-none"/>
            <MDEditor data-color-mode="dark" value={value} onChange={(val) => setValue(val || "")} className="w-4/6 mx-auto"/>
        </div>
    );
}
