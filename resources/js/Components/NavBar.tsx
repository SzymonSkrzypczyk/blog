import { Link } from '@inertiajs/react';

export default function NavBar() {
    return (
        <nav className="sticky flex flex-row items-center justify-between bg-[#020024] px-10 w-4/6 mx-auto bg-opacity-90 top-0 rounded">
            <img src="https://www.trafongroup.com/wp-content/uploads/2019/04/logo-placeholder.png" alt="logo"
                 className="w-50"/>
            <div className="flex flex-row align-baseline gap-6">
                <Link className="bg-[#473FDE] px-4 py-2 rounded text-[#EAE9FC] text-2xl" href={route('login')}>Login</Link>
                <Link className="bg-[#473FDE] px-4 py-2 rounded text-[#EAE9FC] text-2xl" href={route('register')}>Register</Link>
            </div>
        </nav>
    );
}
