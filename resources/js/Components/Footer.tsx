import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center align-baseline w-4/6 mx-auto rounded-t-lg mx-auto mt-8 bg-[#020024] bg-opacity-90 text-[#ebe9fc]">
            <div className="flex flex-row gap-4 justify-center py-2">
                <a href="https://www.linkedin.com/in/szymon-skrzypczyk-b6a4b31b3/"><img src="storage/linkedin.svg" alt="LinkedIn" className="w-20" /></a>
                <a href="https://github.com/SzymonSkrzypczyk"><img  src="storage/github.svg" alt="GitHub" className="w-20" /></a>
            </div>
            <ul className="flex flex-row gap-4 justify-center text-center py-2">
                <li>
                    <Link href="\about">About</Link>
                </li>
                <li>
                    <Link href="">Contact</Link>
                </li>
            </ul>

        </footer>
    )
}
