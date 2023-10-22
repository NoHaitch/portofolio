import Logo from "@/components/logo";
import Link from "next/link";


export default function Navbar(){
    return (
        <header className=" m-auto flex justify-between items-center">
            <div className="flex flex-row items-center">
                <Logo/>
                <h1 className="text-3xl font-bold text-[#00DF9A] m-5">Francisco.</h1>
            </div>
            <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/introduction"
            >
            test
            </Link>
        </header>
    )
}