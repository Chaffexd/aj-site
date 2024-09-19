import Image from "next/image";
import React from "react";
import Link from "next/link";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LandingInto = ({ homePage }) => {
  console.log("Home page data =", homePage); 

  const { image } = homePage?.items[0]?.fields;

  return (
    <>
      <div className="md:w-1/2 px-2">
        <Image src={`https:${image.fields.file.url}`} height={400} width={400} alt={image?.fields?.description || "A photo"} className="rounded-tl-xl rounded-tr-xl mb-8" />
      </div>
      <div className="md:w-1/2 flex-wrap px-2">
        <Link
          href={"/about"}
          className="w-1/3 h-12 text-center flex items-center justify-center bg-amber-400 font-bold mb-8 hover:bg-amber-500"
        >
          about
        </Link>
        <Link
          href={"/podcasts"}
          className="w-1/2 h-12 text-center flex items-center justify-center font-bold bg-amber-700 mb-8 hover:bg-amber-800"
        >
          podcasts
        </Link>
        <Link
          href={"/blog"}
          className="w-1/4 h-12 border-amber-400 text-center flex items-center justify-center bg-amber-400 font-bold mb-8 hover:bg-amber-500"
        >
          blog
        </Link>
        <div className="flex gap-4">
        <Link href={""} target="_blank">
          <Instagram />
        </Link>
        <Link href={""} target="_blank">
          <Twitter />
        </Link>
        </div>
        
      </div>
    </>
  );
};

export default LandingInto;
