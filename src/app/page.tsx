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
        <Image
          width={440}
          height={440}
          src="/images/main.png"
          alt="Francisco Picture"
          className="rounded-[40%] drop-shadow-[0px_0px_13px_#00DF9A] bg-[#]"
        />
      </main>
    </>
  );
}
