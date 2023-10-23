import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-full w-full -mt-14 items-center justify-between">
        <div className="flex flex-col  space-y-3">
          <div className="flex flex-col w-96  space-y-3">
            <h1 className="text-6xl font-bold text-white uppercase">
              Nothing is Impossible
            </h1>
            <h2 className="text-2xl text-[#787878]">
              Only Time that will stop you
            </h2>
          </div>
          <div className="flex flex-col  space-y-2">
            <h1 className="text-6xl font-bold text-[#F99C30] ">
              Francisco Trianto
            </h1>
            <h2 className="text-xl font-bold first-line:text-[#787878]">
              Web Developer based in Indonesia.
            </h2>
          </div>
          <Button title="Get Started" />
        </div>
        <div className="flex flex-row align-middle justify-center space-x-16">
          <div className="flex flex-col opacity-75 space-y-8 justify-center align-middle">
            <div className="w-[150px] h-[100px] text-white bg-[#1E1E1E] text-center rounded-3xl p-2">
            </div>
            <div className="w-[150px] h-[100px] text-white bg-[#1E1E1E] text-center rounded-3xl p-2">
            </div>
            <div className="w-[150px] h-[100px] text-white bg-[#1E1E1E] text-center rounded-3xl p-2">
            </div>
          </div>
          <div className="flex flex-row">
            <svg
              width="354"
              height="532"
              viewBox="0 0 354 532"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[30%]"
            >
              <ellipse cx="177" cy="266" rx="177" ry="266" fill="#00926F"/>
            </svg>

            <Image
              width={400}
              height={400}
              src="/images/main.png"
              alt="Francisco Picture"
              className="rounded-[40%] drop-shadow-[0px_0px_13px_#F99C30]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
