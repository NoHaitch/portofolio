import Image from "next/image";

export default function Logo(){
    return (
        <Image
          src="/images/profile.jpg"
          width={48}
          height={48}
          alt="Picture of the author"
          className="rounded-[50%]" 
        />
    )
}