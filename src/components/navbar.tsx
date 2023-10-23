import Logo from "@/components/logo";
import Link from "next/link";
import Button from "./button";

export default function Navbar() {
  return (
    <header className=" m-auto flex justify-between items-center">
      <div className="flex flex-row items-center">
        <Logo />
        <h1 className="text-3xl font-bold text-[#00DF9A] m-5">Francisco.</h1>
      </div>
      <div className="">
        
        <button className=" border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
          Test
        </button>
        <ul className="hidden text-xl font-bold text-[#00DF9A]">
          <Link className="" href="/">
            Home
          </Link>
          <Link className="" href="/introduction">
            Introduction
          </Link>
          <Link className="" href="/introduction">
            Skills
          </Link>
          <Link className="" href="/introduction">
            Projects
          </Link>
          <Link className="" href="/introduction">
            Socials
          </Link>
        </ul>
      </div>
    </header>
  );
}
