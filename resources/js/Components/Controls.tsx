export default function Controls() {
    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 align-baseline">
            <a href={route("home")}><img src="../storage/images/home-icon.svg" alt="Home" className="w-10"/></a>
            <a href="/posts"><img src="../storage/images/blog-icon.svg" alt="Blog" className="w-12"/></a>
        </div>
    );
}
