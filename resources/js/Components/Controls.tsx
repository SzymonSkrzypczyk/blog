
export default function Controls() {
    return (
        <div className="lg:fixed lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex lg:flex-col flex-row lg:gap-4 align-baseline justify-around">
            <a href={route("home")}><img src="../storage/images/home-icon.svg" alt="Home" className="w-10"/></a>
            <a href="/posts"><img src="../storage/images/blog-icon.svg" alt="Blog" className="w-12"/></a>
        </div>
    );
}
