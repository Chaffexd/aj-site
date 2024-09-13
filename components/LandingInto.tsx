import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";

const LandingInto = () => {
  return (
    <>
      <div className="w-1/2">
        <Image src={""} height={500} width={500} alt="" />
      </div>
      <div className="w-1/2 flex-wrap">
        <Link
          href={"/about"}
          className="w-1/3 h-8 text-center flex items-center justify-center bg-amber-400 font-bold mb-8 hover:bg-amber-500"
        >
          about
        </Link>
        <Link
          href={"/podcasts"}
          className="w-1/2 h-8 text-center flex items-center justify-center font-bold bg-amber-700 mb-8 hover:bg-amber-800"
        >
          podcasts
        </Link>
        <Link
          href={"/blog"}
          className="w-1/4 h-8 text-center flex items-center justify-center bg-amber-400 font-bold mb-8 hover:bg-amber-500"
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
